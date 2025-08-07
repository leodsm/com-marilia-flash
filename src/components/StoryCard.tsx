interface StoryCardProps {
  image: string;
  title: string;
  isActive?: boolean;
}

const StoryCard = ({ image, title, isActive = false }: StoryCardProps) => {
  return (
    <div 
      className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-105' : 'hover:scale-102'
      }`}
    >
      <div className="relative">
        {/* Story Image */}
        <div 
          className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-coral to-primary p-1 shadow-story ${
            isActive ? 'ring-2 ring-coral ring-offset-2' : ''
          }`}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-card">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Active Indicator */}
        {isActive && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-coral rounded-full border-2 border-card animate-pulse-soft" />
        )}
      </div>
      
      {/* Story Title */}
      <p className="text-xs text-center mt-2 font-medium text-foreground max-w-[80px] md:max-w-[96px] truncate">
        {title}
      </p>
    </div>
  );
};

export default StoryCard;