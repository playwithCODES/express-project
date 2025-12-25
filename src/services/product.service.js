import fs from "fs";
const products=fs.readFileSync('data/products.json','utf-8');

const getProducts=(query)=>{
    const brand=query.brand ?? "";
    const data=JSON.parse(products);

    return data.filter((item)=>item.brand==brand);
   
    // return JSON.parse(products);
};

const getProductById=(id)=>{ 
    const products=fs.readFileSync('data/products.json','utf-8');
    const data=JSON.parse(products );
    return data.find((item)=>item.id===parseInt(id));
};

const createProduct=(data)=>{
const productItems=JSON.parse(products);
productItems.push(data);
fs.writeFileSync('data/newProducts.json',JSON.stringify(productItems));


// console.log(data);

}

export default {
    getProducts,
    getProductById,
    createProduct
};
