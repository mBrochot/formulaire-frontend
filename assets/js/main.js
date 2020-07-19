const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  const contactForm = document.querySelector("#contactForm");
  const button = document.querySelector("button");
  const h2 = document.querySelector("h2");
  const h3 = document.querySelector("h3");
  const img = document.querySelector("img");
  const input1 = document.querySelector(".input1");
  const input2 = document.querySelector(".input2");
  const input3 = document.querySelector(".input3");
  const input4 = document.querySelector(".input4");
  const input5 = document.querySelector(".input5");
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
      img.classList.remove("hidden");
      contactForm.reset();
      input1.classList.add("hidden");
      input2.classList.add("hidden");
      input3.classList.add("hidden");
      input4.classList.add("hidden");
      input5.classList.add("hidden");
      button.classList.add("hidden");
    }
  });
});
