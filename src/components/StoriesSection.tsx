import StoryCard from "./StoryCard";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const StoriesSection = () => {
  const stories = [
    {
      id: 1,
      image: story1,
      title: "Show no Centro",
      isActive: true
    },
    {
      id: 2,
      image: story2,
      title: "Festival Gastronômico"
    },
    {
      id: 3,
      image: story3,
      title: "Evento no Parque"
    },
    {
      id: 4,
      image: story1,
      title: "Cultura Local"
    },
    {
      id: 5,
      image: story2,
      title: "Arte Urbana"
    }
  ];

  return (
    <section className="bg-background py-6 border-b">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Acontecendo Agora
          </h2>
          <button className="text-sm text-primary hover:text-coral transition-colors">
            Ver todos
          </button>
        </div>

        {/* Stories Scroll Container */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              image={story.image}
              title={story.title}
              isActive={story.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;