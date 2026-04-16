const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

export default function HeroSection() {
  return (
    <section className="bg-background py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display text-sm tracking-[0.3em] uppercase text-olive mb-6">
          Rota da Primeira Venda
        </p>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground max-w-4xl mx-auto">
          Venda seu primeiro produto digital da beleza em até 7 dias — mesmo sem muitos seguidores
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Se você é profissional da área da beleza e sente que trabalha muito, mas não cresce, aqui você vai aprender como transformar o que você já faz em um produto digital que vende.
        </p>
        <a
          href={CTA_LINK}
          className="mt-10 inline-block bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-base md:text-lg px-8 py-4 rounded-lg transition-colors shadow-lg"
        >
          Quero vender meu primeiro produto digital da beleza
        </a>
      </div>
    </section>
  );
}
