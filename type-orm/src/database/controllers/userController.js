const router = require("express").Router();
const typeorm = require("typeorm");
const Validations = require("../validations/userValidation");
const db = require("../../db.js");

router.get("/",(req,res) => {
    const user = await typeorm.getConnection().createQueryBuilder() 
    .select("user") 
    .from(User, "user") 
    .where("user.id = :id", { id: 1 }) .getOne();
})