const express = require("express");
const router = express.Router();

const QuotationsContrllers = require("../controllers/quotations");

/* List All Quotations */
router.get("/listallquotations", QuotationsContrllers.List_All_Quotations);
/* List Customer information to Create Quotations */
router.post("/findcustomerinfo", QuotationsContrllers.List_Find_Customer_information);
/* Select Package to Create Quotations */
router.post("/selectpackage", QuotationsContrllers.Select_Package);
/* List All Promotions to Create Quotations */
router.get("/listallpromotions", QuotationsContrllers.List_All_Promotions);
/* Create New Quotations */
router.post("/newquotations", QuotationsContrllers.Create_New_Quotations);

module.exports = router;
