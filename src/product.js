class Product {
  id = 0;
  name = "";
  products = [];
}

const ioc = Object.freeze({
  product: new Product(),
});

class ProductService {
  products = []
  create = (product) => {
    product = {
      name: 'New Product'
    }
    this.products.push(product)
  };

  getProducts = () => {
    return this.products
  };
}

const productService = new ProductService();

productService.create(ioc.product);
productService.create(ioc.product);
console.log(productService.getProducts());


