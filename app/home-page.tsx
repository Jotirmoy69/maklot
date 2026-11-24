import Link from "next/link";
import Navbar from "@/components/Navbar";
import SmoothScrollBoundary from "@/components/SmoothScrollBoundary";
import HomeIntro from "@/components/HomeIntro";
import { IntroFromTop } from "@/components/IntroReveal";
import HeroSection from "@/pages/HeroSection";
import DeferredSecond from "@/components/deferred-second";
import DeferredThird from "@/components/deferred-third";
import DeferredForth from "@/components/deferred-forth";
import DeferredFifth from "@/components/deferred-fifth";
import { siteServices } from "./site-config";

export default function HomePage() {
  return (
    <HomeIntro>
      <SmoothScrollBoundary />
      <main id="main-content">
        <IntroFromTop className="relative z-50">
          <Navbar />
        </IntroFromTop>
        <HeroSection />
        <section className="hidden" aria-hidden="true">
          <h2>What Maklot Studio does</h2>
          <p>
            Maklot Studio builds custom software, SaaS products, web apps, MVPs,
            backend systems, and APIs for businesses in Bangladesh and teams worldwide.
            We plan and build products that are easy to understand, launch, and extend.
          </p>
          <div>
            <p>Service summary</p>
            <ul>
              {siteServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href}>{service.name}</Link>
                  <p>{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <DeferredSecond />
        <DeferredThird />
        <DeferredForth />
        <DeferredFifth />
      </main>
    </HomeIntro>
  );
}
