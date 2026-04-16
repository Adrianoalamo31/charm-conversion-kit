const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

const features = [
  "Ideias de produtos baseados no que você já faz na beleza",
  "Estrutura seu método passo a passo",
  "Aprenda como gerar ofertas irresistíveis",
];

export default function IsaSection() {
  return (
    <section className="bg-background py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground">
          Nosso diferencial
        </h2>
        <p className="mt-3 text-muted-foreground text-base md:text-lg">
          O que torna a Rota da Primeira Venda única
        </p>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center">
          <img
            src="/images/isa.jpg"
            alt="ISA - Agente de IA"
            className="w-64 mx-auto rounded-2xl shadow-xl"
            loading="lazy"
          />
          <p className="mt-4 font-heading font-semibold text-foreground">Sua mentora digital</p>
        </div>
        <div className="flex-1">
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
            Seu assistente de IA para criar seu produto digital da beleza
          </h3>
          <div className="mt-6 space-y-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-olive-light border border-olive/20 rounded-lg px-5 py-3 text-foreground font-heading text-sm font-medium"
              >
                {f}
              </div>
            ))}
          </div>
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
