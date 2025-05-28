
import Footer from "../components/footer"
import Header from "../components/header"
import AboutDifferentials from "./components/about-differentials"
import AboutHistory from "./components/about-history"
import AboutValues from "./components/about-values"
import AboutVision from "./components/about-vision"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHistory />
      <AboutValues/>
      <AboutDifferentials />
      <AboutVision />
      <Footer />
    </main>
  )
}
