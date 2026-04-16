const CTA_LINK = "https://pay.kiwify.com.br/VstmIem";

export default function AuthoritySection() {
  return (
    <section className="bg-gray-alt py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 text-center">
          <img
            src="/images/joice.jpg"
            alt="Joice Emiliano"
            className="w-56 md:w-64 rounded-2xl shadow-xl mx-auto"
            loading="lazy"
          />
          <p className="mt-4 font-heading font-semibold text-foreground">Joice Emiliano</p>
          <p className="text-muted-foreground text-sm">Estrategista Digital</p>
        </div>
        <div className="flex-1">
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground">
            Conheça sua Mentora
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            Joice Emiliano é estrategista digital especializada em ajudar profissionais da beleza a criarem e venderem seus produtos digitais. Com mais de 700 alunas formadas, ela desenvolveu o método RPV para que você consiga fazer sua primeira venda mesmo começando do zero.
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
