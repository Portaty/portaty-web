import * as All from "../../public";

export const navbar = {
  logo: All.Logo,
  menu: [
    {
      id: "home",
      title: "Inicio",
    },
    {
      id: "app",
      title: "¿Qué es Portaty?",
    },
    // {
    //   id: "about-us",
    //   title: "Nosotros",
    // },
    {
      id: "contact",
      title: "Contacto",
    },
  ],
  button: {
    title: "Descarga ya",
    icon: "bx bx-right-arrow-alt",
  },
};

export const home = {
  mainImage: All.HomeMain,
  google: All.Google,
  apple: All.Apple,
  first: "La mejor aplicacion",
  second: " para vender tus productos usados",
  ad: "App de comercio",
  subtitle:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u”',
  download: "Descargalo ya",
  buttons: {
    one: {
      id: "one-btn",
      title: "Google Play",
      link: "/",
      icon: "bx bxs-chevrons-right",
    },
    two: {
      id: "two-btn",
      title: "App Store",
      link: "/",
      icon: "bx bxs-chevrons-right",
    },
    three: {
      id: "three-btn",
      title: "Video introductorio",
      link: "/",
      icon: "bx bx-play-circle",
    },
  },
};

export const features = {
  bgFeatures: All.BgFeatures,
  bgTiny: All.BgFeaturesTiny,
  first: "Nuestras",
  second: " características",
  features: [
    {
      id: "feature-1",
      title: "Cuenta totalmente gratis",
      image: All.User,
    },
    {
      id: "feature-2",
      title: "Gran variedad para pagar",
      image: All.Money,
    },
    {
      id: "feature-3",
      title: "Proteccion contra tus datos",
      image: All.Security,
    },
    {
      id: "feature-4",
      title: "Esta al dia con tus ventas y compras",
      image: All.Notifications,
    },
    {
      id: "feature-5",
      title: "",
      image: All.Like,
    },
    {
      id: "feature-6",
      title: "",
      image: All.Clock,
    },
  ],
};

export const whatsis = {
  ad: "Comprar y Vender",
  first: "Nosotros somos",
  second: " PORTATY",
  paragraph:
    "¿Pero que realmente es Portaty? Somos una App de comercio electronico donde puedes vender todos los productos que ya no quieres y Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
  mainImage: ``,
  faqTitle: "Preguntas y respuestas",
  img: All.WhatsIs,
  faq: [
    {
      id: 1,
      question: "¿Puedo vender lo que sea en Portaty?",
      anwser:
        "No, solo puedes vender lo que tenemos en nuestra lista de disponibles para publicar",
    },
    {
      id: 2,
      question: "¿Puedo vender lo que sea en Portaty?",
      anwser:
        "No, solo puedes vender lo que tenemos en nuestra lista de disponibles para publicar",
    },
    {
      id: 3,
      question: "¿Puedo vender lo que sea en Portaty?",
      anwser:
        "No, solo puedes vender lo que tenemos en nuestra lista de disponibles para publicar",
    },
  ],
};

export const download = {
  google: All.Google,
  apple: All.Apple,
  bgDownload: All.BgDownload,
  bgTiny: All.BgDownloadTiny,
  first: "¿Listo para",
  second: " comenzar?",
  subtitle: `Descargue ahora y empiece a vender sus productos que ya no usa. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u`,
  buttons: {
    one: {
      id: "one-btn",
      title: "Google Play",
      link: "/",
      icon: "bx bxs-chevrons-right",
    },
    two: {
      id: "two-btn",
      title: "App Store",
      link: "/",
      icon: "bx bxs-chevrons-right",
    },
  },
};

export const footer = {
  contact: {
    logo: All.Logo,
    info: [
      {
        id: "info-1",
        icon: "bx bxs-envelope",
        text: "soporte@portaty.com",
      },
      {
        id: "info-2",
        icon: "bx bxs-phone",
        text: "+58 00000 00",
      },
    ],
  },
  links: {
    title: "Enlaces",
    pages: [
      {
        id: "pages-1",
        title: "Inicio",
        link: "/",
      },
      {
        id: "pages-2",
        title: "Nosotros",
        link: "/",
      },
      {
        id: "pages-3",
        title: "Precios",
        link: "/",
      },
      {
        id: "pages-4",
        title: "Contáctanos",
        link: "/",
      },
    ],
  },
  legal: {
    title: "Políticas",
    pages: [
      {
        id: "pages-1",
        title: "Términos de uso",
        link: "/",
      },
      {
        id: "pages-2",
        title: "Política de privacidad",
        link: "/",
      },
      {
        id: "pages-3",
        title: "Cookies",
        link: "/",
      },
    ],
  },
  newsletter: {
    title: "Información",
    subtitle: "Mantente informado",
    placeholder: "Tu correo electrónico",
    button: "Suscríbete",
  },
  copy: "Copyright 2023 - Portaty conserva todos los derechos",
};
