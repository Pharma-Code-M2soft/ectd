import { Header, Footer } from "@/components/layout";
import {
  Hero,
  HowItWorks,
  Features,
  Security,
  WaitlistForm,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Security />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
