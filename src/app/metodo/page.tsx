import Footer from "../components/footer";
import Header from "../components/header";
import MethodBenefits from "./components/method-benefits";
import MethodComparison from "./components/method-cases";
import MethodCTA from "./components/method-cta";
import MethodHero from "./components/method-hero";
import MethodIntro from "./components/method-intro";
import MethodSteps from "./components/method-steps";

export default function MethodPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <MethodHero />
      <MethodIntro />
      <MethodSteps />
      <MethodBenefits />
      <MethodComparison />
      <MethodCTA />
      <Footer />
    </main>
  )
}
