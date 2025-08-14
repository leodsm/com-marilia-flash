import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { stories } from "@/lib/stories";

const StoryPage = () => {
  const { id } = useParams();
  const story = stories.find((s) => s.id === Number(id));

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-1">
          <p className="text-foreground">Matéria não encontrada.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1 animate-fade-in">
        <h1 className="text-2xl font-bold mb-4 text-foreground">{story.title}</h1>
        <img
          src={story.image}
          alt={story.title}
          className="w-full max-h-96 object-cover rounded-lg mb-4"
        />
        <p className="text-base leading-relaxed text-foreground">{story.content}</p>
      </main>
      <Footer />
    </div>
  );
};

export default StoryPage;

