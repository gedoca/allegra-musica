import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from "lucide-react";

interface Track {
  title: string;
  artist: string;
  src: string;
}

interface AudioPlayerProps {
  tracks: Track[];
}

const AudioPlayer = ({ tracks }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentTrack < tracks.length - 1) {
        setCurrentTrack(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack, tracks.length]);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * audioRef.current.duration;
  };

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const prev = () => setCurrentTrack(i => Math.max(0, i - 1));
  const next = () => setCurrentTrack(i => Math.min(tracks.length - 1, i + 1));

  if (tracks.length === 0) return null;

  return (
    <div className="allegra-card p-6">
      <audio ref={audioRef} src={tracks[currentTrack]?.src} muted={isMuted} />
      
      <div className="mb-4">
        <h3 className="font-display text-lg font-semibold text-foreground">{tracks[currentTrack]?.title}</h3>
        <p className="text-sm text-muted-foreground font-body">{tracks[currentTrack]?.artist}</p>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="h-1.5 bg-muted rounded-full cursor-pointer group" onClick={seek}>
          <div
            className="h-full bg-primary rounded-full relative transition-all"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between mt-1 text-xs text-muted-foreground font-body">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button onClick={prev} className="text-muted-foreground hover:text-foreground transition-colors">
          <SkipBack className="w-5 h-5" />
        </button>
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        <button onClick={next} className="text-muted-foreground hover:text-foreground transition-colors">
          <SkipForward className="w-5 h-5" />
        </button>
        <button onClick={() => setIsMuted(!isMuted)} className="text-muted-foreground hover:text-foreground transition-colors ml-4">
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Track list */}
      {tracks.length > 1 && (
        <div className="mt-6 space-y-1">
          {tracks.map((track, i) => (
            <button
              key={i}
              onClick={() => { setCurrentTrack(i); setIsPlaying(true); }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-body transition-colors ${
                i === currentTrack
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <span className="text-xs mr-2 opacity-60">{i + 1}.</span>
              {track.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
