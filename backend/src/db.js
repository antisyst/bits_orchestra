class Product {
  constructor(id, name, price, img) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
  }
}

class Review {
  constructor(id, productId, author, comment) {
    this.id = id;
    this.productId = productId;
    this.author = author;
    this.comment = comment;
  }
}

const products = [
  new Product(1, "BAHAMAS SANDS", 29.99, "https://static.wixstatic.com/media/4f84e8_253d171c2be945e1b96df2cf14810487~mv2.jpg/v1/fill/w_570,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"),
  new Product(2, "CARIBBEAN BEACH", 39.99, "https://static.wixstatic.com/media/4f84e8_2c21dcc9a02844cb9bde129c60ab95d5~mv2.jpg/v1/fill/w_570,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"),
  new Product(3, "CUMBERLAND LITE", 49.99, "https://static.wixstatic.com/media/4f84e8_a8ac84f0698947ddbfacd801f70922b5~mv2.jpg/v1/fill/w_570,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"),
  new Product(4, "FIELDSTONE", 59.99, "https://static.wixstatic.com/media/4f84e8_21c69cdc23a649f58a8bc249bbbb9eea~mv2.jpg/v1/fill/w_570,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"),
  new Product(5, "KANEOHE BAY LITE", 19.99, "https://static.wixstatic.com/media/4f84e8_a37dfbea31184644a7ea76d6263b119f~mv2.jpg/v1/fill/w_570,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"),
  new Product(6, "KANEOHE BAY LITE", 69.99, "https://static.wixstatic.com/media/4f84e8_0e65f7c446494da696bfd7e263352587~mv2.jpg/v1/fill/w_570,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"),
  new Product(7, "OLD BLUE SEA", 99.99, "https://static.wixstatic.com/media/4f84e8_e7b3507c1e214ed1bdd8b2952a43ea0f~mv2.jpg/v1/fill/w_570,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg"),
  new Product(8, "PACIFIC SHORES", 79.99, "https://static.wixstatic.com/media/4f84e8_353f0993028b47d6b7dc402e137c08e8~mv2.jpg/v1/fill/w_570,h_570,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg")
];

const reviews = [
  new Review(1, 1, "User1", "Great product!"),
  new Review(2, 1, "User2", "Not bad."),
];

const db = {
  products,
  reviews,
};

module.exports = db;
