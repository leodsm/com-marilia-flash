import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { stories as quickStories } from "@/lib/stories";

const QuickStoriesSection = () => {
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
              <Link
                key={story.id}
                to={`/stories/${story.id}`}
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
              </Link>
            ))}
          </div>
      </div>
    </section>
  );
};

export default QuickStoriesSection;