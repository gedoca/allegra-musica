import { Download, FileText } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  downloadUrl: string;
  type?: string;
}

const ResourceCard = ({ title, description, thumbnail, downloadUrl, type = "PDF" }: ResourceCardProps) => {
  return (
    <div className="allegra-card group">
      <div className="aspect-video bg-muted relative overflow-hidden">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FileText className="w-12 h-12 text-muted-foreground/40" />
          </div>
        )}
        <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-bold font-body px-2 py-1 rounded">
          {type}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{description}</p>
        <a
          href={downloadUrl}
          download
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold font-body hover:bg-primary/20 transition-colors"
        >
          <Download className="w-4 h-4" />
          Descargar
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
