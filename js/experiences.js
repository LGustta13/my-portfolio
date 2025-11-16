const experiences = [
  {
    id: 1,
    title: "Dev FullStack",
    begin: "Abril - 2023",
    end: "Presente",
    description:
      "Desenvolvimento de projetos pessoais e freelancer, buscando concretizar ideias e criar interfaces funcionais e esteticamente atraentes. Conhecimento de responsividade, design system, UI/UX em códigos HTML, CSS, JS e React. Além de backend com NodeJS e o SGBD PostgreSQL.",
  },
  {
    id: 2,
    title: "Analista Automação",
    begin: "Março - 2022",
    end: "Presente",
    description:
      "Suporte aos clientes nas instalações dos rastreadores em seus veículos. Responsável pelo setor de P&D, implementando soluções de telemetria, identificação remota e automação com sistemas embarcados. Experiência com programação para sistemas embarcados utilizando C++ e Python",
  },
  {
    id: 3,
    title: "Consultor de Projetos",
    begin: "Novembro - 2019",
    end: "Novembro - 2020",
    description:
      "Participei de negociações com empresas na cidade de Lavras, além de poder desenvolver habilidades de autogerenciamento, trabalho em equipe, comunicação e gestão de projetos e tempo. Apresentação de propostas de projetos relacionados com aplicações web e mobile. Conhecimento de SCRUM e EAP.",
  },
  {
    id: 4,
    title: "Pesquisador",
    begin: "Setembro - 2018",
    end: "Outubro - 2019",
    description:
      "Desenvolvimento de um sistema de aquisição de dados por meio da plataforma Arduino. O sistema foi instalado nos aviários da empresa Rivelli para coleta de dados de ambiência. Trabalhei em time com estudantes da engenharia civil e agrícola. Experiência de C++ para sistemas embarcados.",
  },
  {
    id: 5,
    title: "Marketing",
    begin: "Janeiro - 2018",
    end: "Janeiro - 2019",
    description:
      "Atuei como membro e líder do setor de Marketing, no qual pude me aperfeiçoar nas ferramentas de edição audiovisual e colocar em prática todo conhecimento agregado de marketing digital. Participei na edição de 2018 da Shell Eco-Marathon. Experiência com Illustrator e Sony Vegas.",
  },
  {
    id: 6,
    title: "Garçom",
    begin: "Março - 2014",
    end: "Abril - 2017",
    description:
      "Exerci funções de atendente (garçom) e caixa. Me orgulho das experiências, aprendizados e network que criei durante este período, pois a convivência com pessoas de diferentes opiniões e culturas agregou significativamente em meu desenvolvimento pessoal e postura profissional.",
  },
  {
    id: 7,
    title: "Analista de calibração",
    begin: "Junho - 2024",
    end: "Presente",
    description:
      "Responsável pela calibração do powertrain para carros híbridos e elétricos da Stellantis. Me especializei tecnicamente em performance e consumo de combustível",
  },
]

const container = document.querySelector(".experiences-container")

experiences.map((experience) => {
  container.innerHTML += `
  <div class="experiences-box">
    <i class='bx bx-code-alt'></i>
    <h3>${experience.title}</h3>
    <h4><span>${experience.begin}</span> | <span>${experience.end}</span></h4>
    <p>${experience.description}</p>
  </div>
  `
})
