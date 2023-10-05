class Product {
  name;
  price;
  imageUrl;
  selected;

  constructor(name, price, imageUrl) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.selected = false;
  }
}

const product1 = new Product("Titleist Pro V1", 599, "...");
const product2 = new Product("Taylormade P790", 8599, "...");
const product3 = new Product("Srixon", 549, "...");

const products = [product1, product2, product3];

window.onload = () => {
  createHtml();
};

function handleClick(clickedProduct) {
  // Byt värde på selected vid varje klick (true -> false, false -> true)
  clickedProduct.selected = !clickedProduct.selected;
  createHtml();
}

function createHtml() {
  const sectionTag = document.getElementById("products");
  sectionTag.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const productTag = document.createElement("div");
    productTag.innerHTML = products[i].name;
    productTag.className = "product";

    if (products[i].selected) {
      productTag.classList.add("selected"); // ["product", "selected"]
    }

    productTag.addEventListener("click", () => {
      handleClick(products[i]);
    });

    sectionTag.appendChild(productTag);
  }
}
