import fs from "fs";
const getProducts=()=>{
    const products=fs.readFileSync('data/products.json','utf-8');
   
    return JSON.parse(products);
};

const getProductById=(id)=>{ 
    const products=fs.readFileSync('data/products.json','utf-8');
    const data=JSON.parse(products );
    return data.find((item)=>item.id===parseInt(id));
};

export default {
    getProducts,
    getProductById
};
