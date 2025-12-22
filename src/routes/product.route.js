import express from 'express';

const router = express.Router();
router.get("/", (req,res)=>{
    res.json(["Iphone","Samsung"]);
});

router.get("/one", (req,res)=>{
    res.json(["Iphone X","Samsung J7 Prime"]);
});


router.get("/two", (req,res)=>{
    res.json(["Iphone 14 pro max","Samsung s23 ultra"]);
});


export default router;