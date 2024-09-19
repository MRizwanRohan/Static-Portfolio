export const studies = [
  {
    title: "Daffodil Internaional University",
    corporation: "BSc - Software Engineering (3.60)",
    date: "09/2020 – 06/2024",
  },
  {
    title: "Shahid Syed Nazrul Islam College",
    corporation: "HSC (4.75)",
    date: "04/2017 – 04/2019",
  },
  {
    title: "Cantonment Public School and College Momenshahi",
    corporation: "SSC (5.00)",
    date: "01/2004 – 04/2017",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  astro: "astro",
  tailwind: "tailwind",
  typeScript: "typeScript",
  git: "git",
  github: "github",
  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },

  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },

  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },

];

//edit pic and styles
export const projects = [
  {
    img: "../../../img/tasks-manager.webp",
    title: "Tasks Manager",
    link: "https://task-manager-ecru-chi.vercel.app/dashboard",
    description: `Administrador de tareas con drag and drop autenticación con Clerk , shadcn.  "En Desarrollo "`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/ecommerce-stripe-2.webp",
    title: "Ecommerce Stripe",
    link: "https://ecommerce-stripe-763m.vercel.app/",
    description: `Proyecto FullStack de un ecommerce con pasarela de pagos stripe integrada, destalles de el product etc.  `,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.mongodb,
      },
      {
        icon: IconKeys.stripe,
      },
    ],
  },
  {
    img: "../../../img/nexanime.webp",
    title: "NexAnime",
    link: "https://nexanime.vercel.app",
    description: `plataforma de anime para ver los animes en tendencia , más valorados , estadísticas.`,
    technologies: [
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/store-games.webp",
    title: "Store games",
    link: "https://store-games-site.netlify.app/",
    description: `Simulando una página de juegos , consumiendo la API de rawg api
      donde los usuarios pueden buscar videojuegos, ver sus detalles como
      creadores , calificaciones,tiendas donde comprar.....`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.reactQuery,
      },
    ],
  },
  {
    img: "../../../img/movie.webp",
    title: "Movie Tv",
    link: "https://movietvsite.netlify.app/",
    description: `simulando una página de películas , consumiendo la API de themovietv
              donde los usuarios pueden buscar películas y ver trailer.....`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/cyberpunk.webp",
    title: "cyberpunk",
    link: "https://preeminent-liger-266356.netlify.app/",
    description: `este proyecto se trata de un clon de la pagína de cyberpunk , donde
      el ususario puede ver los tailer de él juegos y también los
      episodios de la serie....`,
    technologies: [
      {
        icon: IconKeys.html,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
    ],
  },

  

  
];
