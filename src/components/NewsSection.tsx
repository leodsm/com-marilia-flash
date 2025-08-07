import NewsCard from "./NewsCard";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const NewsSection = () => {
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
    },
    {
      image: news1,
      title: "Nova temporada teatral estreia no centro cultural",
      summary: "Grupo local apresenta espetáculo inédito com temática regional.",
      category: "Teatro",
      readTime: "4 min",
      views: "650"
    },
    {
      image: news2,
      title: "Feira de artesanato celebra tradições locais",
      summary: "Artesãos da região expõem trabalhos únicos em evento gratuito.",
      category: "Artesanato",
      readTime: "2 min",
      views: "890"
    },
    {
      image: news3,
      title: "Novo espaço coworking abre no centro de Marília",
      summary: "Ambiente moderno oferece estrutura para empreendedores locais.",
      category: "Negócios",
      readTime: "3 min",
      views: "1.1k"
    }
  ];

  return (
    <main className="bg-background py-8">
      <div className="container mx-auto px-4">
        {/* More News Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">
              Mais do ComMarília
            </h2>
            <button className="text-coral hover:text-coral/80 transition-colors font-medium text-sm">
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