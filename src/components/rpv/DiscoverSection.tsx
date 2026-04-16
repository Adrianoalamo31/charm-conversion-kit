const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

export default function DiscoverSection() {
  return (
    <section className="bg-gray-alt py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        <img
          src="/images/mockup.jpg"
          alt="Rota da Primeira Venda - Produto Digital"
          className="max-w-md w-full rounded-xl shadow-xl"
          loading="lazy"
        />
        <div className="text-center">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-olive mb-4">RPV</p>
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground">
            Rota da Primeira Venda para a área da beleza
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Um método prático, validado e pensado para a sua realidade como profissional da beleza.
          </p>
          <a
            href={CTA_LINK}
            className="mt-8 inline-block bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-base px-8 py-4 rounded-lg transition-colors shadow-lg"
          >
            Quero vender meu primeiro produto digital da beleza
          </a>
        </div>
      </div>
    </section>
  );
}
