import BlackSpacer from "./home/components/black-spacer";
import Contact from "./home/components/contact";
import Features from "./home/components/features";
import Footer from "./components/footer";
import Hero from "./home/components/hero";
import { SparklesCore } from "./home/components/sparkles";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <BlackSpacer />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
