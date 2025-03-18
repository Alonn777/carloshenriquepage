
let scroll = document.getElementById("project-scroll");
let project = document.getElementById("project-section");
let skill = document.getElementById("skill-section");
let skillscroll = document.getElementById("skill-scroll");
scroll
  .addEventListener("click", function (event) {
    event.preventDefault();
    project.scrollIntoView({ behavior: "smooth" });
  })

  skillscroll.addEventListener("click", function (event) {
    event.preventDefault();
    skill.scrollIntoView({behavior:'smooth'})
  });

