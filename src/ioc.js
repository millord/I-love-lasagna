class Product {
  id = 0;
  name = "";
  products = [];
}

const ioc = Object.freeze({
  product: new Product(),
});

