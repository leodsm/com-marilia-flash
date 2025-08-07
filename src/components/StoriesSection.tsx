import { Badge } from "@/components/ui/badge";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg"; 
import news3 from "@/assets/news-3.jpg";

const QuickStoriesSection = () => {
  const quickStories = [
    {
      id: 1,
      image: news1,
      category: "CINEMA",
      title: "Estreia bombástica no novo complexo"
    },
    {
      id: 2,
      image: news2,
      category: "ESPORTES", 
      title: "Vitória histórica do time local"
    },
    {
      id: 3,
      image: news3,
      category: "CULTURA",
      title: "Exposição de artistas marilienses"
    },
    {
      id: 4,
      image: news1,
      category: "GASTRO",
      title: "Festival gastronômico no centro"
    },
    {
      id: 5,
      image: news2,
      category: "TECH",
      title: "Cursos gratuitos de tecnologia"
    }
  ];

  return (
    <section className="bg-background py-8 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-foreground">
            Últimas do Flash
          </h2>
          <button className="text-sm text-coral hover:text-coral/80 transition-colors font-medium">
            Ver todas
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {quickStories.map((story) => (
            <article 
              key={story.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] mb-2 overflow-hidden rounded-lg">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute top-2 left-2">
                  <Badge className="bg-coral/90 text-white text-xs px-2 py-1 rounded">
                    {story.category}
                  </Badge>
                </div>
                
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white text-sm font-medium line-clamp-2 group-hover:text-coral transition-colors">
                    {story.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStoriesSection;