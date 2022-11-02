const Container = require("./contenedor");

const container = new Container();
const file = "./products.json";
const productsArray = [
   {                                                                                                                                                    
      title: 'Gorra',                                                                                                                                 
      price: 130.60,                                                                                                                                     
      thumbnail: 'https://www.corbatasstore.es/assets/SKUImages/_resampled/FitWyI1MDAiLCI1MDAiXQ/DropShadowImageWyIjMDAwIiwiMzAiLCI2IiwiNCIsIjgiXQ/PT-060-00.png'                                                                                                                                                                                 
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Camisa',                                                                                                                              
      price: 250.40,                                                                                                                                     
      thumbnail: 'https://www.multiuniformes.com/productos/imagenes/img_103643_204f92a29dfc1537494c3995414887ac_1.jpg'                                                                                                                                                                                       
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Campera',                                                                                                                          
      price: 370.80,                                                                                                                                     
      thumbnail: 'https://ae01.alicdn.com/kf/HTB1NG7PJpXXXXX0XXXXq6xXFXXX6/Chaqueta-hombres-oto-o-Camperas-Hombre-2015-algod-n-lavado-s-lido-3XL-para-Hombre-de.jpg'                                                                                                                                                                                
    } 
];

function onInit() {
  console.log("Inicio del programa 💻");
  const fileCreated = container.createFile(file);
  fileCreated ? saveAllProducts() : console.log("No se pudo guardar productos");
  fileCreated ? getAllProducts() : console.log("No se pudo leer productos");
  const productFound = fileCreated ? findOneById(1) : null;
  productFound ? deleteProduct(1) : null;
  finishApp();
}

function saveAllProducts() {
  productsArray.map((product) => {
    container.save(product, file);
  });
}

function getAllProducts() {
  const allProductsArray = container.read(file);
  console.log("Productos: ", allProductsArray);
}

function findOneById(id) {
  const product = container.getById(id, file);
  product
    ? console.log("Producto encontrado: ", product)
    : console.log("Producto no encontrado");
  return product ? true : false;
}

function deleteProduct(id) {
  const productDeleted = container.deleteById(id, file);
  console.log("Producto eliminado ID: ", productDeleted);
}

function finishApp() {
  container.deleteAll(file);
  console.log("Fin del programa 👨🏻‍💻");
}

onInit();
