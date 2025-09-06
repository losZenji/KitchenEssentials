const kitchenItems = [
  {
    name: "Knife",
    image: "https://img.icons8.com/ios-filled/100/knife.png",
    description: "A sharp tool used for slicing and chopping ingredients.",
    price: "$15.99"
  },
  {
    name: "Cutting Board",
    image: "https://img.icons8.com/ios/100/cutting-board.png",
    description: "Used as a durable surface for cutting food.",
    price: "$9.99"
  },
  {
    name: "Frying Pan",
    image: "https://img.icons8.com/ios/100/frying-pan.png",
    description: "Perfect for frying eggs, meats, and more.",
    price: "$24.99"
  },
  {
    name: "Spatula",
    image: "https://img.icons8.com/ios/100/spatula.png",
    description: "Used to flip or mix food in a pan.",
    price: "$6.50"
  },
  {
    name: "Measuring Cups",
    image: "https://img.icons8.com/ios/100/measuring-cup.png",
    description: "Helps you measure dry and liquid ingredients accurately.",
    price: "$12.00"
  },
  {
    name: "Microwave",
    image: "https://img.icons8.com/ios/100/microwave.png",
    description: "Used to heat or cook food quickly.",
    price: "$89.00"
  },
  {
    name: "Toaster",
    image: "https://img.icons8.com/ios/100/toaster.png",
    description: "Browns slices of bread to make toast.",
    price: "$25.50"
  },
  {
    name: "Blender",
    image: "https://img.icons8.com/ios/100/blender.png",
    description: "Blends fruits, vegetables, or liquids into smooth mixtures.",
    price: "$49.99"
  }
];

const grid = document.getElementById("itemsGrid");
const searchBar = document.getElementById("searchBar");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

// Render items
function renderItems(items) {
  grid.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
    `;

    // On click, show modal with details
    card.addEventListener("click", () => {
      modalContent.innerHTML = `
        <span class="close">&times;</span>
        <img src="${item.image}" alt="${item.name}" />
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <strong>Price: ${item.price}</strong>
      `;
      modal.style.display = "flex";

      // Add close event
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
