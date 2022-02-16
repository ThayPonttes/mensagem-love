// Abre o Modal

function iniciaModal(openModal) {
  const modal = document.getElementById("openModalBase");

  modal.classList.add("ativo");

  modal.addEventListener("click", (evento) => {
    console.log(evento.target);
    if (evento.target.className == "btnCloseModal") {
      modal.classList.remove("ativo");
    }
  });
}

const btnOpenModal = document.querySelector("button");
btnOpenModal.addEventListener("click", () => iniciaModal("openModal"));
