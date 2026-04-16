const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

export default function OfferSection() {
  return (
    <section className="bg-background py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground">
          Comece agora
        </h2>
        <div className="mt-8 bg-card border border-border rounded-2xl p-10 shadow-lg">
          <p className="text-muted-foreground text-sm">Por apenas</p>
          <p className="mt-2 font-heading text-4xl md:text-5xl font-bold text-foreground">
            12x de R$ 6,93
          </p>
          <p className="mt-2 text-muted-foreground text-sm">
            ou R$ 67,00 à vista
          </p>
          <a
            href={CTA_LINK}
            className="mt-8 inline-block bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-base md:text-lg px-10 py-5 rounded-lg transition-colors shadow-xl"
          >
            Quero vender meu primeiro produto digital da beleza
          </a>
        </div>
      </div>
    </section>
  );
}
