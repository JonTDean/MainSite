import TitleShower from "@/components/index/cta/TitleShower"
import NameBar from "@/components/index/cta/NameBar";
import DescriptionBar from "@/components/index/cta/DescriptionBar";
import SocialLinks from "@/components/index/cta/SocialLinks";
import TechStackCarousel from "@/components/index/cta/TechStackCarousel";
import ScrollAlert from "@/components/index/scroll_through/ScrollAlert";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      {/* CTA */}
      <section className="max-w-3xl text-center mt-14 space-y-10">
        <section className="flex flex-col w-full items-center gap-y-4">
          <NameBar />
          <TitleShower />
          <DescriptionBar />
        </section>
        <SocialLinks />
        <TechStackCarousel />
      </section>
      <ScrollAlert />
    </main>
  );
}

