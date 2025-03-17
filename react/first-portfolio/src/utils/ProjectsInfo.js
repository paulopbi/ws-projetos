/* NOTE for cards stay in the same size,
descriptions must be at least 180 characters long*/
import FLASHDASH_DEMO from "../assets/flashdash_demo.gif";
import RICK_MORTY_DEMO from "../assets/rick_and_morty_demo.gif";
import ANIMAIS_DEMO from "../assets/animais_fantastico_demo.gif";
import WEATHER_DEMO from "../assets/weather_demo.gif";
import LEMON_PEPER_DEMO from "../assets/lemon_peper.jpg";
import ALLSTORE_DEMO from "../assets/allstore.jpg";
import GITHUB_ICON from "../assets/github_icon.svg";
import BEHANCE_ICON from "../assets/behance_icon.svg";

const ProjectsInfo = [
  {
    id: 1,
    name: "FlashDash",
    label_button: "Repositório",
    icon: GITHUB_ICON,
    repository: "https://github.com/paulopbi/flashdash",
    demonstration: "https://paulopbi.github.io/flashdash/",
    description:
      "Uma aplicação que utiliza a API do Unsplash para gera fotos aleatórias a cada vez que você entrar, os usuários podem baixar as fotos e usar como wallpaper de celular ou computador.",
    image_path: FLASHDASH_DEMO,
    badges: ["REACT", "Tailwind", "API"],
  },
  {
    id: 2,
    name: "Rick And Morty",
    label_button: "Repositório",
    icon: GITHUB_ICON,
    repository: "https://github.com/paulopbi/rick-and-morty",
    demonstration: "https://paulopbi.github.io/rick-and-morty/",
    description:
      "Explore o rico multiverso de Rick e Morty onde você dados detalhados de todos os personagens da serie, podendo utilizar vários filtros como nome ou status para customizar as suas pesquisas.",
    image_path: RICK_MORTY_DEMO,
    badges: ["React", "CSS", "Motion", "Router Dom", "API"],
  },
  {
    id: 3,
    name: "Animais Fantásticos",
    label_button: "Repositório",
    icon: GITHUB_ICON,
    repository: "https://github.com/paulopbi/animais-fantasticos",
    demonstration: "https://paulopbi.github.io/animais-fantasticos/",
    description:
      "Esse site mostra algumas curiosidades de alguns animais alguns animais, com componentes e animações feitas do zero sem nenhum framework ou biblioteca, usando somente HTML, CSS, JS.",
    image_path: ANIMAIS_DEMO,
    badges: ["HTML", "CSS", "JS", "API"],
  },
  {
    id: 4,
    name: "Aplicação de Clima",
    label_button: "Repositório",
    icon: GITHUB_ICON,
    description:
      "Utilizando a WeatherApi, esta aplicação permite aos usuários buscar informações climáticas em tempo real de qualquer cidade do mundo! Basta digitar o nome da cidade no formulário.",
    repository: "https://github.com/paulopbi/weather_app",
    demonstration: null,
    image_path: WEATHER_DEMO,
    badges: ["React", "Tailwind", "WeatherApi", "API"],
  },
  {
    id: 5,
    name: "Lemon Peper",
    label_button: "Behance",
    icon: BEHANCE_ICON,
    description:
      "Lemon Peper, um projeto de UI Design feito em colaboração com um amigo, sendo um website para pizzaria, onde utilizando alguns filtros, o usuário pode ver vários tipos de pizzas diferentes.",
    repository: "https://www.behance.net/gallery/142436253/UI_Design_Pizzaria",
    demonstration: null,
    image_path: LEMON_PEPER_DEMO,
    badges: ["UI Design", "Figma"],
  },
  {
    id: 6,
    name: "All Store",
    label_button: "Behance",
    icon: BEHANCE_ICON,
    description:
      "O Projeto de UI Design All-Store é uma loja virtual onde você encontra de tudo! De eletrônicos a tênis, oferecemos variedade e qualidade em um só lugar, explore e descubra o que precisa!",
    repository:
      "https://www.behance.net/gallery/213316509/All-Store-Find-Everything-Here",
    demonstration:
      "https://www.figma.com/design/nEeiviFiFj82uIpz4pRy1n/ALLSTORE?m=auto&t=IDJyZALpowO1Hydc-1",
    image_path: ALLSTORE_DEMO,
    badges: ["UI Design", "Figma"],
  },
];

export default ProjectsInfo;
