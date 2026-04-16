const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

export default function ProofsSection() {
  return (
    <section className="bg-background py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground">
          Resultados reais
        </h2>
        <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Profissionais da área da beleza que saíram do zero e já fizeram suas primeiras vendas
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["/images/print1.jpg", "/images/print2.jpg", "/images/print3.jpg"].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Depoimento ${i + 1}`}
              className="w-full rounded-xl shadow-md"
              loading="lazy"
            />
          ))}
        </div>
        <p className="mt-8 text-olive font-heading font-semibold text-lg">
          Mais de 700 mulheres formadas
        </p>
        <a
          href={CTA_LINK}
          className="mt-8 inline-block bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-base px-8 py-4 rounded-lg transition-colors shadow-lg"
        >
          Quero vender meu primeiro produto digital da beleza
        </a>
      </div>
    </section>
  );
}
