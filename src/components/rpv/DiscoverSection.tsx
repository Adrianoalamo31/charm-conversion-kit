const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

export default function DiscoverSection() {
  return (
    <section className="bg-gray-alt py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground leading-tight">
            O que você vai descobrir
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            Como transformar o que você já faz na beleza em um produto digital que vende
          </p>
          <a
            href={CTA_LINK}
            className="mt-8 inline-block bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-base px-8 py-4 rounded-lg transition-colors shadow-lg"
          >
            Quero vender meu primeiro produto digital da beleza
          </a>
        </div>
        <div className="flex-1">
          <img
            src="/images/mockup.jpg"
            alt="Rota da Primeira Venda - Produto Digital"
            className="w-full rounded-xl shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
