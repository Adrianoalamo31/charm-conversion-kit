const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

const items = [
  {
    title: "Profissionais da beleza",
    desc: "Que querem vender online mas não sabem por onde começar",
  },
  {
    title: "Quem tem conhecimento",
    desc: "Mas ainda não transformou em um produto digital",
  },
  {
    title: "Quem já tentou",
    desc: "E não conseguiu fazer a primeira venda",
  },
  {
    title: "Quem quer liberdade",
    desc: "E parar de depender apenas de atendimentos presenciais",
  },
];

export default function ForWhoSection() {
  return (
    <section className="bg-background py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground">
          Para quem é
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 text-left shadow-sm"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground">{item.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <a
          href={CTA_LINK}
          className="mt-10 inline-block bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-base px-8 py-4 rounded-lg transition-colors shadow-lg"
        >
          Quero vender meu primeiro produto digital da beleza
        </a>
      </div>
    </section>
  );
}
