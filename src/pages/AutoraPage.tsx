import aboutPortrait from "@/assets/about-portrait.jpg";

const AutoraPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 px-6 bg-muted/30 overflow-hidden">
        <div className="allegra-container">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">Autora / Música</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2">Allegra</h1>
        </div>
      </section>

      <section className="allegra-section">
        <div className="allegra-container grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src={aboutPortrait}
              alt="Cintia Alegre cantando"
              className="rounded-xl w-full object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-foreground">Soy Cin Alegre.</h2>
            <p>
              Podría decirte que canté en iglesias, bares de blues, recitales con topper gastadas, coros escolares y bodas donde mi voz fue la que abrió el paso.
            </p>
            <p>
              Podría contarte que fui profe de canto, directora de coro, coordinadora de grupos, trabajadora de mil oficios, madre de Thiago, viajera de montañas y aprendiz eterna.
            </p>
            <p>
              Podría decirte que viví en Buenos Aires y que hoy vivo en Colombia. Que hice un montón de cosas distintas… y que todas, de alguna manera, me hicieron ser quien soy.
            </p>
            <p>
              Pero la verdad es que mi historia también tiene una parte que no mostraba.
            </p>
            <p>
              Hace unos años, cuando me animé a mostrar mis canciones en vivo, llegó el quiebre más grande de mi vida. Todo se rompió. Y entendí que lo que nunca me había animado a hacer… era contar mi historia.
            </p>
            <p>
              Para poder hacerlo, tuve que habitarla, llorarla, dejar de negarla y abrazar cada una de mis partes. De ahí nace mi primer disco: <strong className="text-foreground">Todas las partes</strong>.
            </p>
            <p>
              Un collage de canciones y textos donde conviven pedazos míos que antes estaban escondidos. Un rompecabezas que se arma con música, palabras y emociones que, aunque son mías, sé que también son tuyas.
            </p>
            <p className="italic text-foreground/80">
              Si llegaste hasta acá, capaz me conocés de alguna de esas etapas… o capaz no tenés idea de quién soy. En cualquiera de los casos, bienvenido.
            </p>
            <p className="font-semibold text-primary">
              Esta página es la puerta para que podamos encontrarnos en este viaje.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoraPage;
