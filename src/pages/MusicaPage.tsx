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
          <p className="text-muted-foreground font-body mb-6 max-w-2xl">
            Un quiebre hecho canción. Escuchá el EP completo en todas las plataformas.
          </p>
          
          {/* Streaming Links */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a 
              href="https://open.spotify.com/album/0f2h1hZ2lhqqBrm5H8NgDV" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-body font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <a 
              href="https://music.apple.com/mx/album/fractura-pt-1-single/1878742532" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-body font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408a10.61 10.61 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 0 0 1.57-.1c.822-.106 1.596-.35 2.296-.81a5.046 5.046 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324.113-.67.148-1.347.160-2.027.007-.473.01-.947.01-1.42V6.124zM12.633 4.196c.61.006 1.22-.003 1.83.013.195.005.39.042.582.085a2.5 2.5 0 0 1 1.937 1.932c.054.248.088.5.1.754.01.208.007.417.007.625v5.62c0 .28-.01.56-.04.838a2.54 2.54 0 0 1-2.144 2.293c-.424.065-.854.088-1.283.09-.605.003-1.21-.01-1.813-.042a3.28 3.28 0 0 1-.787-.124 2.502 2.502 0 0 1-1.774-1.93 4.32 4.32 0 0 1-.095-.787c-.01-.21-.007-.42-.007-.63V7.312c0-.28.01-.56.04-.838a2.54 2.54 0 0 1 2.144-2.292c.424-.066.854-.088 1.283-.09.607-.003 1.214.01 1.82.042zm-5.124 8.87c.007-.608.01-1.216.023-1.824.003-.15.023-.302.05-.45a2.116 2.116 0 0 1 1.93-1.832c.36-.036.723-.05 1.085-.053.562-.007 1.124.003 1.685.013v5.62c-.007.608-.01 1.216-.023 1.824-.003.15-.023.302-.05.45a2.116 2.116 0 0 1-1.93 1.832 7.2 7.2 0 0 1-1.085.053c-.562.007-1.124-.003-1.685-.013v-5.62z"/>
              </svg>
              Apple Music
            </a>
            <a 
              href="https://music.youtube.com/playlist?list=OLAK5uy_kCkQV_GoO1b9deXit6_yKNIrhN1qPMDwE&si=rRGE6l8EAeVDZnEl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-body font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube Music
            </a>
          </div>

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

      {/* Timeline */}
      <section className="allegra-section">
        <div className="allegra-container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Línea del Tiempo</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-12">
              {[
                { year: "1988", text: "Nací en Buenos Aires, Argentina." },
                { year: "1995", text: "Primeros pasos en coros infantiles y música en la iglesia." },
                { year: "2005", text: "Explorando el blues y el jazz en bares porteños." },
                { year: "2010", text: "Formación vocal y estudios en psicología social." },
                { year: "2015", text: "Comienzo a componer mis propias canciones." },
                { year: "2018", text: "El quiebre: empiezo a contar mi historia a través de la música." },
                { year: "2022", text: "Fundación de Allegra: voz, terapia y arte como camino de transformación." },
                { year: "2024", text: "Lanzamiento del EP 'Fractura' — El primer paso del disco 'Todas las partes'." },
                { year: "2026", text: "Campaña de financiamiento colectivo para completar el disco completo." },
              ].map((item, i) => (
                <div key={i} className="relative pl-20 group">
                  {/* Year marker */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary group-hover:bg-primary/20 transition-colors">
                    <span className="font-display font-bold text-sm text-primary">{item.year}</span>
                  </div>
                  {/* Content */}
                  <div className="allegra-card p-6">
                    <p className="text-muted-foreground font-body leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicaPage;
