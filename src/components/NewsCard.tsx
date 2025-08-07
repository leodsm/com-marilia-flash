import { Clock, Eye, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  image: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  views: string;
  isNew?: boolean;
  isPopular?: boolean;
  hasVideo?: boolean;
  variant?: 'large' | 'small';
}

const NewsCard = ({
  image,
  title,
  summary,
  category,
  readTime,
  views,
  isNew = false,
  isPopular = false,
  hasVideo = false,
  variant = 'large'
}: NewsCardProps) => {
  return (
    <article 
      className={`bg-card rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group ${
        variant === 'large' ? 'md:flex md:h-48' : 'flex flex-col h-full'
      }`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${
        variant === 'large' 
          ? 'h-48 md:h-full md:w-2/5 flex-shrink-0' 
          : 'h-40 w-full'
      }`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {isNew && (
            <Badge className="bg-coral text-coral-foreground">Nova</Badge>
          )}
          {isPopular && (
            <Badge className="bg-primary text-primary-foreground">Mais lida</Badge>
          )}
          {hasVideo && (
            <Badge variant="secondary" className="bg-background/80 text-foreground">
              <Video className="w-3 h-3 mr-1" />
              Vídeo
            </Badge>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="outline" className="bg-background/90 border-border/50">
            {category}
          </Badge>
        </div>
      </div>

      {/* Content Container */}
      <div className={`p-4 flex flex-col justify-between flex-1 ${
        variant === 'large' ? 'md:w-3/5' : ''
      }`}>
        <div className="flex-1">
          <h3 className={`font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors ${
            variant === 'large' ? 'text-lg md:text-xl' : 'text-base'
          }`}>
            {title}
          </h3>
          
          <p className={`text-gray-warm mb-3 line-clamp-2 ${
            variant === 'large' ? 'text-sm md:text-base' : 'text-sm'
          }`}>
            {summary}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center space-x-4 text-xs text-gray-warm">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {readTime}
            </div>
            <div className="flex items-center">
              <Eye className="w-3 h-3 mr-1" />
              {views}
            </div>
          </div>
          
          <Button 
            size="sm" 
            className="bg-primary text-primary-foreground hover:bg-coral transition-colors"
          >
            Ler mais
          </Button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;