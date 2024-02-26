const cars = [
  {
    imageSrc: "./assets/jaguar-fake.jpeg",
    name: "Jaguar",
    price: 130000.99,
  },
  {
    imageSrc: "./assets/palio.png",
    name: "Palio Economy",
    price: 30000.99,
  },
  {
    imageSrc: "./assets/sandero.png",
    name: "Sandero Stepway",
    price: 76000.99,
  },
  {
    imageSrc: "./assets/corolla.png",
    name: "Corolla Patrão",
    price: 830000.99,
  },
  {
    imageSrc: "./assets/jaguar-fake.jpeg",
    name: "Jaguar",
    price: 130000.99,
  },
  {
    imageSrc: "./assets/palio.png",
    name: "Palio Economy",
    price: 30000.99,
  },
  {
    imageSrc: "./assets/sandero.png",
    name: "Sandero Stepway",
    price: 76000.99,
  },
  {
    imageSrc: "./assets/corolla.png",
    name: "Corolla Patrão",
    price: 830000.99,
  },
];

function renderCarList(carsToRender) {
  const carListContainer = document.getElementById("car-list");
  carListContainer.innerHTML = "";

  carsToRender.forEach(function (car) {
    const li = document.createElement("li");
    const formattedPrice = car.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    li.classList.add("car-item");

    li.innerHTML = `
      <div class="ctn-img">
        <img src="${car.imageSrc}" alt="${car.name}" />
      </div>
      <div class="ctn-info">
        <div class="car-name">
          <p>${car.name}</p>
        </div>
        <div class="car-price">
          <p>${formattedPrice}</p>
        </div>
      </div>
    `;

    li.addEventListener("click", function () {
      openModal(car);
    });

    carListContainer.appendChild(li);
  });
}

function openModal(car) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("content-modal");
  const formattedPrice = car.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  modalContent.innerHTML = `
  <div class="ctn-img">
    <img src="${car.imageSrc}" alt="imagem car modal" />
  </div>
  <div class="ctn-info">
    <p>${car.name.toUpperCase()}</p>
    <p>${formattedPrice}</p>
  </div>
  <div class="ctn-description">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
      ipsa earum, voluptatem unde tempore deserunt sequi dignissimos
      ullam commodi
    </p>
  </div>
  <button>Comprar Agora</button>
`;

  modal.style.display = "block";
}

function searchCars() {
  const searchInput = document.getElementById("searchInput");
  const searchText = searchInput.value.toLowerCase();

  const filteredCars = cars.filter(function (car) {
    return car.name.toLowerCase().includes(searchText);
  });

  console.log(filteredCars);

  renderCarList(filteredCars);
}

document.addEventListener("DOMContentLoaded", function () {
  renderCarList(cars);

  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("content-modal");

  modal.addEventListener("click", function (event) {
    if (!modalContent.contains(event.target)) {
      modal.style.display = "none";
    }
  });
});
