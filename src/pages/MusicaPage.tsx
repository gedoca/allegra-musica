import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bio01 from "@/assets/bio-01.jpg";
import bio02 from "@/assets/bio-02.jpg";
import fracturaCover from "@/assets/fractura-cover.jpg";
import musicaHero from "@/assets/sesiones-bg.jpg";

const MusicaPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={musicaHero} 
            alt="Cin Alegre en estudio de grabación" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
        </div>
        <div className="allegra-container relative z-10">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-primary">Artista / Música</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-2">Música</h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mt-4">
            Las canciones que nacen de la experiencia vivida. Sonidos que cuentan lo que las palabras no alcanzan.
          </p>
        </div>
      </section>

      {/* Fractura EP with cover */}
      <section className="allegra-section">
        <div className="allegra-container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-start">
            <div>
              <img
                src={fracturaCover}
                alt="Portada Fractura EP — Allegra"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              {/* CTA Campaña */}
              <Link
                to="/campaña"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-body font-semibold text-sm"
              >
                Apoya el resto del disco: IR A LA CAMPAÑA
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Fractura — Primer EP</h2>
              <p className="text-muted-foreground font-body mb-6 max-w-2xl">
                Un quiebre hecho canción. Escuchá el EP completo en todas las plataformas.
              </p>
              
              {/* Streaming Links */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a href="https://open.spotify.com/album/0f2h1hZ2lhqqBrm5H8NgDV" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-body font-semibold text-sm">
                  Spotify
                </a>
                <a href="https://music.apple.com/mx/album/fractura-pt-1-single/1878742532" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-body font-semibold text-sm">
                  Apple Music
                </a>
                <a href="https://music.youtube.com/playlist?list=OLAK5uy_kCkQV_GoO1b9deXit6_yKNIrhN1qPMDwE&si=rRGE6l8EAeVDZnEl" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-body font-semibold text-sm">
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
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="allegra-section bg-muted/30">
        <div className="allegra-container grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <img src={bio01} alt="Cin Alegre — retrato" className="rounded-xl w-full object-cover aspect-[3/4]" loading="lazy" />
            <img src={bio02} alt="Cin Alegre — sesión" className="rounded-xl w-full object-cover aspect-[3/4]" loading="lazy" />
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
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary group-hover:bg-primary/20 transition-colors">
                    <span className="font-display font-bold text-sm text-primary">{item.year}</span>
                  </div>
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
