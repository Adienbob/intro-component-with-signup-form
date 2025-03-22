let inputs = document.querySelectorAll("input");

document.querySelector("form").addEventListener("submit", (event) => {
   event.preventDefault(); 
   inputs.forEach(element => {
      if (!element.value.trim()) {
         element.nextElementSibling.style.display = "block";
         element.style.border = "1px solid hsl(0, 100%, 74%)";
         element.setAttribute("class", "fa-bounce");
      };
   });
});

inputs.forEach((element) => {
   element.addEventListener("click", () => {
      element.classList.remove("fa-bounce");
      element.removeAttribute("style");
      element.nextElementSibling.removeAttribute("style");
   });
})

