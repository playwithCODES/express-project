import productService from "../services/product.service.js";
const homePage = (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(400).send(error?.message);
  }
};

const productsPage =async (req, res) => {
  try {
    const products= await productService.getProducts({});
    res.render("products", {products});
  } catch (error) {
    res.status(400).send(error?.message);
  }
};

export default { homePage, productsPage };
