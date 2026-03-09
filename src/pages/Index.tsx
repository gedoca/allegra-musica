import { Link } from "react-router-dom";
import { ArrowRight, Music2, Mic2, Play } from "lucide-react";
import homeHero from "@/assets/home-hero-01.jpg";
import fracturaCover from "@/assets/fractura-cover.jpg";

const WHATSAPP_URL = "https://wa.me/5491153130624";

const videoIds = ["ffIm50MJTtg", "X4w4qAeF09Q", "Tp5QOr2cTDQ", "rLmifbry6qM"];
const videoTitles = [
  'Campaña "Todas las partes"',
  "Pozo - Lisandro Aristimuño (cover)",
  "Al lado del camino - Fito Páez (cover)",
  "Alfonsina y el mar (cover)",
];

const HomePage = () => {
  return (
    <div>
      {/* Hero — Fractura EP Launch */}
      <section className="relative h-[95vh] min-h-[650px] flex items-center justify-center overflow-hidden">
        <img
          src={homeHero}
          alt="Allegra — Fractura EP"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        <div className="relative z-10 text-center px-6 animate-fade-in-up max-w-3xl mx-auto">
          <p className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-primary/80 mb-6">
            Nuevo EP disponible
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-4 leading-[0.9] tracking-tight">
            Fractura
          </h1>
          <p className="text-base md:text-lg text-foreground/60 font-body max-w-md mx-auto mb-10 leading-relaxed">
            Un quiebre hecho canción. El primer EP de Allegra ya está en todas las plataformas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://open.spotify.com/album/0f2h1hZ2lhqqBrm5H8NgDV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold hover:opacity-90 transition-opacity"
            >
              <Play className="w-4 h-4" />
              Escuchar en Spotify
            </a>
            <a
              href="https://music.apple.com/mx/album/fractura-pt-1-single/1878742532"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3 rounded-full font-body font-semibold hover:bg-foreground/5 transition-colors"
            >
              Apple Music
            </a>
            <a
              href="https://music.youtube.com/playlist?list=OLAK5uy_kCkQV_GoO1b9deXit6_yKNIrhN1qPMDwE&si=rRGE6l8EAeVDZnEl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3 rounded-full font-body font-semibold hover:bg-foreground/5 transition-colors"
            >
              YouTube Music
            </a>
          </div>

          {/* CTA Campaña */}
          <div className="mt-8">
            <Link
              to="/campaña"
              className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline transition-colors text-sm"
            >
              Apoya el resto del disco: IR A LA CAMPAÑA
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Spotify embed with album cover */}
      <section className="allegra-section bg-muted/30">
        <div className="allegra-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-center">
            <img
              src={fracturaCover}
              alt="Portada Fractura EP"
              className="w-full max-w-[280px] mx-auto rounded-xl shadow-lg"
              loading="lazy"
            />
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Escuchá Fractura</h2>
              <p className="text-muted-foreground font-body mb-6">El EP completo, directo desde Spotify.</p>
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

      {/* Proposals */}
      <section className="allegra-section">
        <div className="allegra-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Mis Propuestas
          </h2>
          <p className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto">
            Espacios de encuentro con la voz, la música y el ser.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Mic2 className="w-8 h-8" />,
                title: "Terapeuta",
                subtitle: "Voz y terapia",
                desc: "Soltar el Aire, Circle Singing y sesiones de exploración vocal para conectar con tu voz auténtica.",
                link: "/terapeuta",
              },
              {
                icon: <Music2 className="w-8 h-8" />,
                title: "Música",
                subtitle: "Canciones y arte",
                desc: "Las canciones que nacen de la experiencia vivida. Escuchá el EP Fractura y conocé la historia detrás.",
                link: "/musica",
              },
            ].map((p, i) => (
              <Link key={i} to={p.link} className="allegra-card p-8 group text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  {p.icon}
                </div>
                <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary">{p.subtitle}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="allegra-section bg-muted/30">
        <div className="allegra-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoIds.map((id, i) => (
              <div key={id} className="allegra-card overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={videoTitles[i]}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-body font-medium text-foreground">{videoTitles[i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="allegra-section text-center">
        <div className="allegra-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Querés explorar tu voz?
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            Escribime para conocer más sobre las sesiones, Soltar el Aire o Circle Singing.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Contacto
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
