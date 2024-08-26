const apiInit = async () => {
  try {
    const url = await fetch(`https://fakestoreapi.com/products/`)
    const response = await url.json();
    render(response)
  } catch (e) {
    console.error(e)
  }
}

const render = async (dataApi) => {
  const container = document.querySelector(".filters");
  const div = document.createElement('div')
  div.classList.add("products")

  dataApi.map((data) => {
    div.innerHTML +=
      `
  <div class="products__content">
      <div class="products__img-wrapper" data-id="${data.id}">
        <img src="${data.image}" alt="${data.title}" />
      </div>
      <div class="products__itens">
        <p>${data.title}</p>
        <span>U$ ${data.price}</span>
        <button class="button see__more">See More <i class="bi bi-arrow-right-circle"></i></button>
      </div>
    </div>
  `
    container.append(div)
  })
}

// tostify lib
(() => {
  const buttons = document.querySelectorAll(".filters__buttons button")
  buttons.forEach((button) => {
    button.addEventListener("click", () => {

      Toastify({
        text: "This feature will be add in the furute!",
        duration: 4000,
        destination: "https://github.com/paulopbi",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#fb3131",
        },
        onClick: function () { }
      }).showToast();
    })
  })
})()

apiInit();
