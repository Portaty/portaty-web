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
  second: " hacia un mundo de oportunidades comerciales",
  ad: "App de comercio",
  subtitle: `En un mundo interconectado donde la accesibilidad y la autenticidad son
    fundamentales, Portaty se destaca como una aplicación innovadora que está redefiniendo la
    forma en que los negocios y los consumidores se conectan en un nivel global. Al fusionar la
    eficiencia de la tecnología digital con la autenticidad del comercio local. Portaty se convierte en tu
    destino definitivo para descubrir, explorar y conectar con todo lo que necesitas, sin importar
    dónde te encuentres.`,
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
      title: "Búsqueda personalizada",
      image: All.User,
    },
    {
      id: "feature-2",
      title: "Visualización auténtica",
      image: All.Money,
    },
    {
      id: "feature-3",
      title: "Ubicación precisa",
      image: All.Security,
    },
    {
      id: "feature-4",
      title: "Registro de favoritos",
      image: All.Notifications,
    },
    {
      id: "feature-5",
      title: "Alcance global",
      image: All.Like,
    },
    {
      id: "feature-6",
      title: "Interacción directa",
      image: All.Clock,
    },
  ],
};

export const whatsis = {
  ad: "Descubre negocios",
  first: "Nosotros somos",
  second: " PORTATY",
  paragraph: `Portaty no es solo una aplicación, es un puente que une a negocios y consumidores en un mundo
  cada vez más conectado. Al ofrecer una experiencia de usuario única y beneficios tanto para los
  negocios como para los consumidores, estamos construyendo un futuro donde la distancia ya no
  es un obstáculo para el comercio global. Únete a nosotros en esta emocionante aventura y
  descubre un mundo de oportunidades comerciales justo en la palma de tu mano con Portaty.`,
  mainImage: ``,
  faqTitle: "Preguntas y respuestas",
  img: All.WhatsIs,
  faq: [
    {
      id: 1,
      question: "¿Puedo encontrar cualquier negocio?",
      anwser:
        "Si, puedes encontrar cualquier negocio que este registrado en Portaty",
    },
    {
      id: 2,
      question: "¿Puedo contactar directamente con los negocios?",
      anwser:
        "Si, tienes multiples opciones para lograr ponerte en contacto con el negocio que tu quieras",
    },
    {
      id: 3,
      question: "¿Puedo registrar mi propio negocio en Portaty?",
      anwser: `Si, Portaty te permite registrar tu negocio en pocos pasos y sin muchas complicaciones`,
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
  subtitle: `Descargue ahora y empiece a descubrir un monton de negocios a su alcance y/o registrar sus propios negocios 😉`,
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
