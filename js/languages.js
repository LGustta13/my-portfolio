import { experiencesPortuguese, experiencesEnglish } from "./experiences.js"
import { educationsPortuguese, educationsEnglish } from "./education.js"
import { projectsPortuguese, projectsEnglish } from "./projects.js"

export const languages = [
  {
    id: "pt-br",
    title: "Portfólio | Luis Gustavo",
    header: "Portfólio",
    nav: ["Home", "Sobre", "Experiências", "Formação", "Portfólio", "Contato"],
    homeContent: {
      h1: "Olá, sou eu!",
      h2: "Luis Gustavo",
      h3: "E sou um",
      span1: "Desenvolvedor Frontend",
      span2: "Analista de Calibração",
      description:
        "Tenho paixão por transformar ideias em realidade digital. Este é o meu portfólio, onde você pode explorar as minhas criações e acompanhar meu progresso enquanto busco aprimorar minhas habilidades e contribuir para a web de forma impactante!",
    },
    aboutContent: {
      h1: "Sobre <span>mim</span>",
      description:
        "Com mais de 3 anos de experiência como <span>Analista de Automação e Calibração</span>, desenvolvi aplicações de automação e telemetria veicular em <span>C++ e Python</span>, além de calibrar veículos híbridos xHEV e desenvolver ferramentas de <span> otimização e performance </span> para projetos da Stellantis. Busco me aprimorar a todo instante, no qual nos últmos meses venho estudando e desenvolvendo projetos freelancer nas stacks <span>JavaScript, HTML, CSS e React</span>, além também de tecnologias com algoritmos de IA.",
    },
    experiencesContent: {
      h1: "<span>Experiências</span> Profissionais",
      content: experiencesPortuguese,
    },
    educationContent: {
      h1: "Formação",
      content: educationsPortuguese,
    },
    portfolioContent: {
      h1: "<span>Projetos</span> Frontend",
      content: projectsPortuguese,
    },
    contactContent: {
      h1: "Contato",
      placeholder: ["Nome", "Email", "Telefone", "Assunto", "Sua mensagem"],
      button: "Enviar mensagem",
    },
    footer: "Copyright © 2023 de Luis Gustavo | Todos os direitos reservados",
  },
  {
    id: "en-us",
    title: "Portfolio | Luis Gustavo",
    header: "Portfolio",
    home: "Home",
    nav: ["Home", "About", "Experiences", "Education", "Portfolio", "Contact"],
    homeContent: {
      h1: "Hello, it's me!",
      h2: "Luis Gustavo",
      h3: "And I am",
      span1: "Frontend Developer",
      span2: "Automation Analyst",
      description:
        "I have a passion for turning ideas into digital reality. This is my portfolio, where you can explore my creations and track my progress as I seek to enhance my skills and make an impactful contribution to the web!",
    },
    aboutContent: {
      h1: "About <span>me</span>",
      description:
        "With over 3 years of experience as an <span>Automation and Calibration Analyst</span>, I developed vehicle automation and telemetry applications in <span>C++ and Python</span>, in addition to calibrating xHEV hybrid vehicles and creating <span> optimization and performance tools </span> for Stellantis projects. I strive to continuously improve and, in recent months, have been studying and developing freelance projects using the <span>JavaScript, HTML, CSS, and React</span> stack, as well as technologies involving AI algorithms.",
    },
    experiencesContent: {
      h1: "Professional <span>Experiences</span>",
      content: experiencesEnglish,
    },
    educationContent: {
      h1: "Education",
      content: educationsEnglish,
    },
    portfolioContent: {
      h1: "Frontend <span>projects</span>",
      content: projectsEnglish,
    },
    contactContent: {
      h1: "Contact",
      placeholder: ["Name", "Email", "Tel", "Topic", "Your message"],
      button: "Send message",
    },
    footer: "Copyright © 2023 by Luis Gustavo | All rights reserved",
  },
]


// Estou em transição de carreira para o desenvolvimento < span > Frontend</span >, onde tenho desenvolvido projetos freelancer nos últimos meses nas stacks < span > JavaScript, HTML, CSS e React</span >.