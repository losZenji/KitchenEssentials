const kitchenItems = [
  {
    name: "Knife",
    image: "https://img.icons8.com/ios-filled/100/knife.png",
    description: "A sharp tool used for slicing and chopping ingredients.",
    price: "₱505.90"
  },
  {
    name: "Cutting Board",
    image: "https://img.icons8.com/ios/100/cutting-board.png",
    description: "Used as a durable surface for cutting food.",
    price: "₱565.98"
  },
  {
    name: "Frying Pan",
    image: "https://img.icons8.com/ios/100/frying-pan.png",
    description: "Perfect for frying eggs, meats, and more.",
    price: "₱1,415.79"
  },
  {
    name: "Spatula",
    image: "https://img.icons8.com/ios/100/spatula.png",
    description: "Used to flip or mix food in a pan.",
    price: "₱368.25"
  },
  {
    name: "Measuring Cups",
    image: "https://img.icons8.com/ios/100/measuring-cup.png",
    description: "Helps you measure dry and liquid ingredients accurately.",
    price: "₱125.25"
  },
  {
    name: "Microwave",
    image: "https://img.icons8.com/ios/100/microwave.png",
    description: "Used to heat or cook food quickly.",
    price: "₱5,042.24"
  },
  {
    name: "Toaster",
    image: "https://img.icons8.com/ios/100/toaster.png",
    description: "Browns slices of bread to make toast.",
    price: "₱1,444.69"
  },
  {
    name: "Blender",
    image: "https://img.icons8.com/ios/100/blender.png",
    description: "Blends fruits, vegetables, or liquids into smooth mixtures.",
    price: "₱2,832.15"
  },
  {
    name: "Kent T. Lorenzo",
    image: "https://img.icons8.com/ios/100/blender.png",
    description: "Pinaka gwapo sa act.",
    price: "₱1,500.00"
  }
];

const grid = document.getElementById("itemsGrid");
const searchBar = document.getElementById("searchBar");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

// Render items with discount
function renderItems(items) {
  grid.innerHTML = "";
  items.forEach(item => {
    const originalPrice = parseFloat(item.price.replace("₱", "").replace(",", ""));
    const discountedPrice = (originalPrice * 0.8).toFixed(2);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p class="price">
        <span class="original">₱${originalPrice.toLocaleString()}</span>
        <span class="discounted">₱${parseFloat(discountedPrice).toLocaleString()}</span>
        <span class="tag">20% OFF</span>
      </p>
    `;

    // On click, show modal with details
    card.addEventListener("click", () => {
      modalContent.innerHTML = `
        <span class="close">&times;</span>
        <img src="${item.image}" alt="${item.name}" />
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p class="price">
          <span class="original">₱${originalPrice.toLocaleString()}</span>
          <span class="discounted">₱${parseFloat(discountedPrice).toLocaleString()}</span>
          <span class="tag">20% OFF</span>
        </p>
      `;
      modal.style.display = "flex";

      document.querySelector(".close").onclick = () => {
        modal.style.display = "none";
      };
    });

    grid.appendChild(card);
  });
}


// Search functionality
searchBar.addEventListener("input", e => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredItems = kitchenItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );
  renderItems(filteredItems);
});

// Close modal when clicking outside content
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Initial render
renderItems(kitchenItems);
