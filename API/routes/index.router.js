import express from 'express';
var router = express.Router();
 
router.get('/',(req,res)=>{
    res.send("default mmmmm path ");
});
export default router;