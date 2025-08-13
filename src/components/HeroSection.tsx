import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const stories = [
    {
      id: 1,
      image: heroImage,
      category: "MARÍLIA",
      title: "Quem é o responsável pelos eventos mais aguardados de Marília?",
      subtitle: "Conheça os bastidores da produção cultural da cidade",
      isMain: true
    },
    {
      id: 2,
      image: heroImage,
      category: "REGIÃO",
      title: "Festival de música movimenta o centro da cidade",
      subtitle: "Três dias de shows gratuitos agitam Marília"
    },
    {
      id: 3,
      image: heroImage,
      category: "BRASIL",
      title: "Projeto social transforma vidas na periferia",
      subtitle: "Iniciativa oferece cursos e oportunidades para jovens"
    }
  ];

  return (
    <section className="bg-background py-8 lg:py-12 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Navigation Pills */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-secondary rounded-full p-1 space-x-1">
            {["Marília", "Região", "Brasil", "Mundo", "Entretenimento"].map((item, index) => (
              <button
                key={item}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-coral text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Story Carousel */}
        <div className="max-w-md mx-auto relative">
          <div className="relative bg-card rounded-2xl overflow-hidden shadow-card">
            {/* Main Story */}
            <div className="relative h-96 lg:h-[500px]">
              <img
                src={stories[0].image}
                alt={stories[0].title}
                className="w-full h-full object-cover bg-white"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-3">
                  <span className="inline-block bg-coral text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {stories[0].category}
                  </span>
                </div>
                
                <h2 className="text-xl lg:text-2xl font-bold text-white mb-2 line-clamp-2">
                  {stories[0].title}
                </h2>
                
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  {stories[0].subtitle}
                </p>
                
                {/* Story dots */}
                <div className="flex justify-center space-x-2 mb-4">
                  {stories.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === 0 ? "bg-coral" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <Button
                size="sm"
                variant="ghost"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 p-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Follow Button */}
          <div className="flex justify-center mt-6">
            <button className="flex items-center space-x-2 bg-secondary hover:bg-secondary/80 text-foreground px-4 py-2 rounded-full text-sm font-medium transition-colors">
              <div className="w-6 h-6 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
              <span>Seguir ComMarília</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;