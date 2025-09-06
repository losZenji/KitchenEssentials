const kitchenItems = [
  { name: "Knife", image: "https://img.icons8.com/ios-filled/100/knife.png" },
  { name: "Cutting Board", image: "https://img.icons8.com/ios/100/cutting-board.png" },
  { name: "Frying Pan", image: "https://img.icons8.com/ios/100/frying-pan.png" },
  { name: "Spatula", image: "https://img.icons8.com/ios/100/spatula.png" },
  { name: "Measuring Cups", image: "https://img.icons8.com/ios/100/measuring-cup.png" },
  { name: "Microwave", image: "https://img.icons8.com/ios/100/microwave.png" },
  { name: "Toaster", image: "https://img.icons8.com/ios/100/toaster.png" },
  { name: "Blender", image: "https://img.icons8.com/ios/100/blender.png" }
];

const grid = document.getElementById("itemsGrid");
const searchBar = document.getElementById("searchBar");

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
    grid.appendChild(card);
  });
}

// Search Functionality
searchBar.addEventListener("input", e => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredItems = kitchenItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );
  renderItems(filteredItems);
});

// Initial render
renderItems(kitchenItems);
