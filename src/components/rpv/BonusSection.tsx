const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

export default function BonusSection() {
  return (
    <section className="bg-gray-alt py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground">
          Bônus exclusivos
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-left">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-olive">Bônus 1</span>
            <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">Guia Prático de Venda</h3>
            <p className="mt-1 text-muted-foreground text-sm">Com aplicação passo a passo</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li className="flex gap-2"><span className="text-cta">&#10003;</span> O que falar para gerar interesse</li>
              <li className="flex gap-2"><span className="text-cta">&#10003;</span> Como conduzir sem travar</li>
              <li className="flex gap-2"><span className="text-cta">&#10003;</span> Como fechar com naturalidade</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-left">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-olive">Bônus 2</span>
            <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">Scripts de Conversão</h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li className="flex gap-2"><span className="text-cta">&#10003;</span> Frases prontas para atrair clientes no Instagram</li>
              <li className="flex gap-2"><span className="text-cta">&#10003;</span> Conversas que conduzem para o fechamento no WhatsApp</li>
              <li className="flex gap-2"><span className="text-cta">&#10003;</span> Estrutura simples para transformar interesse em venda</li>
            </ul>
          </div>
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
