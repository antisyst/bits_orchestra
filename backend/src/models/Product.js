class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const products = [
  new Product(1, "Product A", 29.99),
  new Product(2, "Product B", 39.99),
];

Product.getAllProducts = () => products;

Product.getProductById = (id) => products.find((product) => product.id === id);

module.exports = Product;
