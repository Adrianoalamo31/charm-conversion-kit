import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/rpv/HeroSection";
import DiscoverSection from "../components/rpv/DiscoverSection";
import ProofsSection from "../components/rpv/ProofsSection";
import MethodSection from "../components/rpv/MethodSection";
import ForWhoSection from "../components/rpv/ForWhoSection";
import ProductSection from "../components/rpv/ProductSection";
import IsaSection from "../components/rpv/IsaSection";
import BonusSection from "../components/rpv/BonusSection";
import OfferSection from "../components/rpv/OfferSection";
import AuthoritySection from "../components/rpv/AuthoritySection";
import FaqSection from "../components/rpv/FaqSection";
import WhatsAppButton from "../components/rpv/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RPV - Rota da Primeira Venda para Profissionais da Beleza" },
      {
        name: "description",
        content:
          "Venda seu primeiro produto digital da beleza em até 7 dias. Método prático para profissionais da beleza que querem crescer no digital.",
      },
      { property: "og:title", content: "RPV - Rota da Primeira Venda para Profissionais da Beleza" },
      {
        property: "og:description",
        content:
          "Venda seu primeiro produto digital da beleza em até 7 dias — mesmo sem muitos seguidores.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <HeroSection />
      <DiscoverSection />
      <ProofsSection />
      <MethodSection />
      <ForWhoSection />
      <ProductSection />
      <IsaSection />
      <BonusSection />
      <OfferSection />
      <AuthoritySection />
      <FaqSection />
      <WhatsAppButton />
    </>
  );
}
