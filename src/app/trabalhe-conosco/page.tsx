import Footer from "../components/footer";
import Header from "../components/header";
import CareersCulture from "./components/careers-culture";
import CareersForm from "./components/careers-form";
import CareersHero from "./components/careers-hero";
import CareersIntro from "./components/careers-intro";
import CareersProcess from "./components/careers-process";

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CareersHero />
      <CareersIntro />
      <CareersCulture />
      <CareersProcess />
      <CareersForm />
      <Footer />
    </main>
  )
}
