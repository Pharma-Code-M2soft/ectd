import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/schemas/waitlist";
import { google } from "googleapis";

async function appendToGoogleSheet(data: {
  name: string;
  company: string;
  email: string;
  phone?: string;
  interestArea: string;
}) {
  const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!credentials || !spreadsheetId) {
    console.warn("Google Sheets not configured, skipping sheet append");
    return;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toISOString();
    const values = [
      [
        timestamp,
        data.name,
        data.company,
        data.email,
        data.phone || "",
        data.interestArea,
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Leads!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });
  } catch (error) {
    console.error("Error appending to Google Sheet:", error);
    throw new Error("Failed to save to Google Sheets");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = waitlistSchema.safeParse(body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((e) => e.message);
      return NextResponse.json(
        { message: errors[0], errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Attempt to save to Google Sheets
    try {
      await appendToGoogleSheet(data);
    } catch (error) {
      // Log error but don't fail the request if Google Sheets is not configured
      console.error("Google Sheets error:", error);
    }

    return NextResponse.json(
      { message: "Inscricao realizada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
