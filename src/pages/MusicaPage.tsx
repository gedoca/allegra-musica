import aboutPortrait from "@/assets/about-portrait.jpg";

const MusicaPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 px-6 bg-muted/30 overflow-hidden">
        <div className="allegra-container">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">Artista / Música</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2">Música</h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mt-4">
            Las canciones que nacen de la experiencia vivida. Sonidos que cuentan lo que las palabras no alcanzan.
          </p>
        </div>
      </section>

      {/* Spotify Player */}
      <section className="allegra-section">
        <div className="allegra-container max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Fractura — Primer EP</h2>
          <p className="text-muted-foreground font-body mb-8 max-w-2xl">
            Un quiebre hecho canción. Escuchá el EP completo en Spotify.
          </p>
          <div className="w-full rounded-xl overflow-hidden">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/album/0f2h1hZ2lhqqBrm5H8NgDV?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Fractura — Allegra en Spotify"
            />
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="allegra-section bg-muted/30">
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
              Hace unos años, cuando me animé a mostrar mis canciones en vivo, llegó el quiebre más grande de mi vida. Todo se rompió. Y entendí que lo que nunca me había animado a hacer… era contar mi historia.
            </p>
            <p>
              Para poder hacerlo, tuve que habitarla, llorarla, dejar de negarla y abrazar cada una de mis partes. De ahí nace mi primer disco: <strong className="text-foreground">Todas las partes</strong>.
            </p>
            <p className="italic text-foreground/80">
              Un collage de canciones y textos donde conviven pedazos míos que antes estaban escondidos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicaPage;
