const projects = [
  {
    id: 1,
    category: "WEB",
    title: "DevLinks",
    description:
      "Agregador de links para você utilizar como cartão de visitas online",
    imgURL: "./assets/projects/devlinks.png",
    stacks: ["JavaScript", "HTML", "CSS"],
    link: "https://lgustta13.github.io/devlinks/",
    github: "https://github.com/LGustta13/devlinks",
  },
  {
    id: 2,
    category: "WEB",
    title: "DTMoney",
    description: "Plataforma para seu controle de gastos",
    imgURL: "./assets/projects/dtmoney.png",
    stacks: ["JavaScript", "HTML", "CSS", "Styled Components"],
    link: "https://dtmoney-lgusta.vercel.app/",
    github: "https://github.com/LGustta13/dtmoney",
  },
  {
    id: 3,
    category: "WEB",
    title: "Monitore IoT",
    description:
      "Plataforma de monitoramento de dados de telemetria desenvolvido durante meu TCC",
    imgURL: "./assets/projects/monitore.png",
    stacks: ["JavaScript", "React", "TypeScript", "ApexCharts", "CSS"],
    link: "https://monitore-iot-lgusta.vercel.app/",
    github: "https://github.com/LGustta13/monitore_iot/tree/master/web-vite",
  },
  {
    id: 4,
    category: "WEB",
    title: "Time Traveller",
    description: "Registre seus melhores momentos e memórias",
    imgURL: "./assets/projects/timetraveller.png",
    stacks: ["Next", "React", "TypeScript", "TailwindCSS", "Fastify", "Prisma"],
    link: "https://traveller-lgusta.vercel.app/",
    github: "https://github.com/LGustta13/time_traveller",
  },
  {
    id: 5,
    category: "MOBILE",
    title: "My Skills",
    description: "Registre suas habilidades durante seus estudos",
    imgURL: "./assets/projects/myskills.png",
    stacks: ["Next", "React", "TypeScript", "TailwindCSS", "Fastify", "Prisma"],
    link: "#",
    github: "https://github.com/LGustta13/devlinks",
  },
  {
    id: 6,
    category: "WEB",
    title: "Login page",
    description:
      "Tenha um template de página de login com design system e documentação",
    imgURL: "./assets/projects/loginpage.png",
    stacks: ["React", "TailwindCSS"],
    link: "https://login-page-lgusta.vercel.app/",
    github: "https://github.com/LGustta13/login-page",
  },
]

const containerProjects = document.querySelector(".portfolio-container")

projects.map((project) => {
  containerProjects.innerHTML += `
    <div class="portfolio-box">
      <div class="portfolio-box-bg">
        <div class="gradient">
          <img src="${project.imgURL}" alt="">
        </div>
        <h3>${project.title}</h3>
        <div class="text">
          ${project.stacks
            .map((stack) => {
              return `<p>${stack}</p>`
            })
            .join("")}
        </div>
      </div>

      <div class="portfolio-layer">
        <h4>${project.title}</h4>
        <p>${project.category} | ${project.description}</p>
        <div class="icons">
          <a href="${project.link}" target="_blank">
            <i class='bx bx-link-external'></i>
          </a>
          <a href="${project.github}" target="_blank">
            <i class='bx bxl-github'></i>
          </a>
        </div>
      </div>
    </div>
  `
})
