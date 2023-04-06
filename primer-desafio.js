class ProductManager {

    constructor(id, title, description, price, thumbnail, code, stock) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
      this.lastId = 0;
      this.products = [];
    }
    
    getProducts() {
      return this.products;
    }
    
    addProduct(product) {        
      if (this.products.some (p => p.code === product.code)) {
        console.log ("El código debe ser único");
      }
      
      const newProduct = { ...product, id: this.generaId() };
      this.products.push(newProduct);
      return newProduct;
    }
    
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        console.log (`El producto con el id ${id} no fue encontrado`);
      }
      return product;
    }
    
    generaId () {      
      return ++this.lastId;
    }
    

  };
  
  const producto1 = new ProductManager ();
  console.log (producto1.getProducts());
  producto1.addProduct ({id: producto1.generaId(), title: "producto prueba", description: "Este es un producto de prueba", price: 200, thumbnail:"Sin imagen", code: "abc123", stock: 25});
  console.log (producto1.getProducts());
  producto1.addProduct ({id: producto1.generaId(), title: "producto prueba", description: "Este es un producto de prueba", price: 200, thumbnail:"Sin imagen", code: "abc123", stock: 25});
  console.log (producto1.getProductById(1));
  console.log (producto1.getProductById(2));
  