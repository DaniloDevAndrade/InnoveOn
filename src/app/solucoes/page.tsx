import Header from "../components/header";
import SolutionsHero from "./components/solutions-hero";
import SolutionsList from "./components/solutions-list";
import SolutionsCTA from "./components/solutions-cta";
import SolutionDetail from "./components/solution-detail";
import { solutions } from "./components/solutions";
import Footer from "../components/footer";


export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SolutionsHero />
      <SolutionsList />
      {solutions.map((solution, index) => (
        <SolutionDetail key={solution.id} solution={solution} isEven={index % 2 === 0} />
      ))}
      <SolutionsCTA />
      <Footer />
    </main>
  )
}
