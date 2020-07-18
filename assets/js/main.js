const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  const contactForm = document.querySelector("#contactForm");
  const button = document.querySelector("button");
  const h2 = document.querySelector("h2");
  const h3 = document.querySelector("h3");
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    button.setAttribute("disable", "disable");
    button.classList.add("btn-disabled");
    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };
    console.log(data);
    const response = await axios.post(
      "https://mon-formulaire-backend.herokuapp.com/",
      data
    );
    if (response.status !== 200) {
      button.removeAttribute("disable");
      button.classList.remove("btn-disabled");
      h3.classList.remove("alert");
    } else {
      button.removeAttribute("disable");
      button.classList.remove("btn-disabled");
      h2.classList.remove("hidden");
      contactForm.reset();
    }
  });
});
