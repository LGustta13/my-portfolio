const educations = [
  {
    id: 1,
    title: "Discover",
    begin: "Agosto - 2023",
    end: "Agosto - 2023",
    place: "Rocketseat",
  },
  {
    id: 2,
    title: "Bacharel em Engenharia de Controle e Automação",
    begin: "Abril - 2017",
    end: "Agosto - 2023",
    place: "UFLA - Universidade Federal de Lavras",
  },
  {
    id: 3,
    title: "Inglês nível B2",
    begin: "Janeiro - 2012",
    end: "Janeiro - 2017",
    place: "CCAA",
  },
  {
    id: 4,
    title: "Oratória e Informática",
    begin: "Março - 2013",
    end: "Julho - 2013",
    place: "CEDUP - Centro Profissionalizante",
  },
]

const containerEducation = document.querySelector(".education-container")

educations.map((education) => {
  containerEducation.innerHTML += `
  <div class="his-line"></div>
    <div class="education-box">
      <div class="his-circle"></div>
      <h3>${education.title}</h3>
      <h4><span>${education.begin}</span> | <span>${education.end}</span></h4>
      <p>${education.place}</p>
    </div>
  `
})
