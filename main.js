let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "Red Printed Tshirt",
    tag: "redtshirt",
    price: 15,
    inCart: 0,
  },
  {
    name: "shoes",
    tag: "shoes",
    price: 15,
    inCart: 0,
  },
  {
    name: "pants",
    tag: "pants",
    price: 15,
    inCart: 0,
  },
  {
    name: "blue Printed Tshirt",
    tag: "bluetshirt",
    price: 15,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    let productid = document.querySelector("#productid").innerText;
    cartNumbers(products[productid]);
  });
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
  } else {
    localStorage.setItem("cartNumbers", 1);
  }

  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
