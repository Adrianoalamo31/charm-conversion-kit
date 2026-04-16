import { useState } from "react";

const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

const faqs = [
  {
    q: "Preciso ter muitos seguidores para vender?",
    a: "Não. O método ensina como vender mesmo com poucos seguidores, usando estratégias de conexão e conversão.",
  },
  {
    q: "Não tenho experiência com o digital. Consigo acompanhar?",
    a: "Sim. O conteúdo foi pensado para iniciantes, com passo a passo simples e prático.",
  },
  {
    q: "Quanto tempo tenho de acesso?",
    a: "Você terá acesso por 1 ano completo ao conteúdo e às atualizações.",
  },
  {
    q: "Como funciona o acesso à ISA?",
    a: "Após a compra, você recebe acesso direto à ISA, sua assistente de IA, para ajudar na criação do seu produto digital.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground text-center">
          Perguntas frequentes
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-heading font-medium text-foreground hover:bg-muted/50 transition-colors"
              >
                {faq.q}
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={CTA_LINK}
            className="inline-block bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-base md:text-lg px-10 py-5 rounded-lg transition-colors shadow-xl"
          >
            Quero vender meu primeiro produto digital da beleza
          </a>
        </div>
      </div>
    </section>
  );
}
