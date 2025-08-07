import NewsCard from "./NewsCard";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const NewsSection = () => {
  const featuredNews = {
    image: news1,
    title: "Novo cinema de Marília recebe estreia aguardada pelos fãs da cidade",
    summary: "O mais moderno complexo cinematográfico da região inaugura com sessões especiais e promoções para toda a família.",
    category: "Entretenimento",
    readTime: "3 min",
    views: "2.1k",
    isNew: true,
    hasVideo: true
  };

  const sideNews = [
    {
      image: news2,
      title: "Time local conquista vitória histórica no campeonato regional",
      summary: "Marília FC vence de virada e se aproxima da classificação para as semifinais.",
      category: "Esportes", 
      readTime: "2 min",
      views: "1.8k",
      isPopular: true
    },
    {
      image: news3,
      title: "Galeria de arte contemporânea abre exposição de artistas marilienses",
      summary: "Mostra reúne 30 obras de 15 artistas locais com entrada gratuita até o final do mês.",
      category: "Cultura",
      readTime: "4 min", 
      views: "950",
      isNew: true
    }
  ];

  const moreNews = [
    {
      image: news1,
      title: "Festival gastronômico movimenta o centro histórico",
      summary: "Evento reúne 20 food trucks e restaurantes locais com pratos típicos da região.",
      category: "Gastronomia",
      readTime: "2 min",
      views: "1.2k"
    },
    {
      image: news2,
      title: "Projeto social oferece cursos gratuitos de tecnologia",
      summary: "Iniciativa visa capacitar jovens da periferia para o mercado de trabalho digital.",
      category: "Comunidade",
      readTime: "3 min",
      views: "890"
    },
    {
      image: news3,
      title: "Parque ecológico recebe melhorias e novas atrações",
      summary: "Investimento municipal traz trilhas sustentáveis e área de recreação infantil.",
      category: "Meio Ambiente",
      readTime: "2 min",
      views: "756"
    }
  ];

  return (
    <main className="bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Featured Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Destaque do Dia
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Featured News */}
            <div className="lg:col-span-2">
              <NewsCard {...featuredNews} variant="large" />
            </div>
            
            {/* Side News */}
            <div className="space-y-6">
              {sideNews.map((news, index) => (
                <NewsCard key={index} {...news} variant="small" />
              ))}
            </div>
          </div>
        </section>

        {/* More News Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Mais Notícias
            </h2>
            <button className="text-primary hover:text-coral transition-colors font-medium">
              Ver todas as notícias
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreNews.map((news, index) => (
              <NewsCard key={index} {...news} variant="small" />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default NewsSection;