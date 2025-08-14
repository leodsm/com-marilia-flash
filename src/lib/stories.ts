import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

export interface Story {
  id: number;
  image: string;
  category: string;
  title: string;
  content: string;
}

export const stories: Story[] = [
  {
    id: 1,
    image: news1,
    category: "CINEMA",
    title: "Estreia bombástica no novo complexo",
    content: "Detalhes completos sobre a estreia bombástica no novo complexo de cinema em Marília."
  },
  {
    id: 2,
    image: news2,
    category: "ESPORTES",
    title: "Vitória histórica do time local",
    content: "Resumo da vitória histórica que marcou os torcedores do time local."
  },
  {
    id: 3,
    image: news3,
    category: "CULTURA",
    title: "Exposição de artistas marilienses",
    content: "Conheça a nova exposição que celebra os artistas marilienses e suas obras."
  },
  {
    id: 4,
    image: news1,
    category: "GASTRO",
    title: "Festival gastronômico no centro",
    content: "Todos os sabores do festival gastronômico que tomou conta do centro da cidade."
  },
  {
    id: 5,
    image: news2,
    category: "TECH",
    title: "Cursos gratuitos de tecnologia",
    content: "Informações sobre os cursos gratuitos de tecnologia disponíveis para a comunidade."
  }
];

