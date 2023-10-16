import express from "express"
import { addPetsValidator } from "../validators/pets.validators.js"
import { validation } from "../middleware/validate.middlewares.js"
import { addPets } from "../controllers/pets.controller.js"
const router = express.Router()

router.route("/add-pets").post(addPetsValidator(), validation, addPets);

export default router