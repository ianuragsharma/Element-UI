const docs = document.querySelector(".docs");
const dropdown = document.querySelector(".dropdown");
const anchorTag = document.querySelectorAll(".anchor-tag");

docs.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
});

document.body.addEventListener("click", (e) => {
  if (e.target.className !== "docs") dropdown.classList.add("hide");
});
