import axios from 'axios';

const payViaKhalti=async(data)=>{

    const body = JSON.stringify({
      "return_url":config.appUrl, //frontend url
      "website_url":config.appUrl,
      "amount": data.amount*100,
      "purchase_order_id": data.purchaseOrderId,
      "purchase_order_name": data.purchaserOrderName,
      "customer_info": {
        "name":data.customer.name,
        "email":data.customer.email,
        "phone":data.customer.phone 
      }
    });
const response=await axios.post(config.khalti.apiUrl,body,{
     headers: { 
    'Authorization': `Key ${config.khalti.secret}`, 
    
  },
});
return response.data;
}
export { payViaKhalti };