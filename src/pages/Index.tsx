import Header from "@/components/Header";
import StoriesSection from "@/components/StoriesSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StoriesSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
