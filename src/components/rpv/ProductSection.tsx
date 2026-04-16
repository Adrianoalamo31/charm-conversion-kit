const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

const modules = [
  "Como criar seu produto digital da beleza",
  "Como atrair pessoas certas",
  "Como vender com confiança",
];

export default function ProductSection() {
  return (
    <section className="bg-gray-alt py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground">
            O que você vai receber
          </h2>
          <p className="mt-3 text-muted-foreground text-base">
            Você terá acesso imediato a:
          </p>
          <ul className="mt-6 space-y-4">
            {modules.map((m, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-olive-light flex items-center justify-center text-olive text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-foreground font-heading font-medium">{m}</span>
              </li>
            ))}
          </ul>
          <a
            href={CTA_LINK}
            className="mt-8 inline-block bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-base px-8 py-4 rounded-lg transition-colors shadow-lg"
          >
            Quero vender meu primeiro produto digital da beleza
          </a>
        </div>
        <div className="flex-1">
          <img
            src="/images/mockup2.jpg"
            alt="Conteúdo do RPV"
            className="w-full rounded-xl shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
