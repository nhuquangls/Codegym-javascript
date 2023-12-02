let product1 = new Product("Nokia 11", 2000000, 20, "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png?w=1080")
let product2 = new Product("OPPO Extra", 3000000, 30, "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png?w=1080")

let arrProduct = [product1, product2];
let indexEdit = -1

function displayAllProduct() {
  let data = "<table>";
  data += "<tr>";
  data += "<th id='title'>Product Name</th>";
  data += "<th id='title'>Product Price</th>";
  data += "<th id='title'>Product Quantity</th>";
  data += "<th id='title'>Product Image</th>";
  data +=
    "<th colspan='2' id='action'>" + arrProduct.length + " products</th>";
  data += "</tr>";

  for (let i = 0; i < arrProduct.length; i++) {
    data += "<tr>";
    data += "<td>" + arrProduct[i].name + "</td>";
    data += "<td>" + arrProduct[i].price + "</td>";
    data += "<td>" + arrProduct[i].quantity + "</td>";
    data += "<td><img style='width:120px;height:100px;' src='"+ arrProduct[i].image + "' alt='Lỗi'></td>";
    data += "<td><button onclick='editGet(" + i + ")'>Edit</button></td>";
    data += "<td><button onclick='deleteP(" + i + ")'>Delete</button></td>";
    data += "</tr>";
  }
  data += "</table>";
  document.getElementById("result").innerHTML = data;
}

function add() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
  let image = document.getElementById("image").value;
  let product = new Product(name, price, quantity, image)
  arrProduct.push(product);
  document.getElementById("form-add").reset()
  displayAllProduct();
  event.preventDefault()
}

function editGet(index) {
  indexEdit = index
  document.getElementById("edit").value = arrProduct[index]
}

function editPost() {
  let newProduct = document.getElementById("edit").value
  if (newProduct != "") {
    arrProduct[indexEdit] = newProduct
  }
  indexEdit = -1
  document.getElementById("edit").value = ""
  displayAllProduct()
}

function deleteP(index) {
  if (
    confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrProduct[index] + "?")
  ) {
    arrProduct.splice(index, 1);
  }
  displayAllProduct();
}