function getProducts() {
    const productForm = document.getElementById("productForm");
    const productsTable = document.getElementById("productsTable").getElementsByTagName("tbody")[0];

productForm.addEventListener("submit", (event) => { 
  event.preventDefault();
});
  const productName = document.getElementById("newItem").value;
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("qty").value);

  if (isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
    alert("Invalid input. Please enter valid numbers for price and quantity.");
    return;
  }
  const product = {
    name: productName,
    price: price,
    quantity: quantity,
  };

  let products = [];

  products.push(product);

  document.getElementById("newItem").value = "";
  document.getElementById("price").value = "";
  document.getElementById("qty").value = "";

  products.forEach((element, index) => {
    productsTable.innerHTML += `  
    <tr>
        <td>${index + 1}</td>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>${element.quantity}</td>
        <td>${element.price * element.quantity}</td>
        <td>
            <button onclick="editItem()" class="edit-btn">
                <img src="./imgs/edit-delete-icons.png">
            </button>
        </td>
    </tr>

    
    `

  });
}

function editItem() {

}