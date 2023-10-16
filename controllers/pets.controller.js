import { Pets } from "../models/pets.models.js"

export const addPets = async (req, res) => {
    const { name, gender, species, favFoods, birthYear, photo } = req.body
    try {
        const petCreated = await Pets.create({ name, gender, species, favFoods, birthYear, photo })
        const petGot = await Pets.findById(petCreated._id)
        if (!petGot) {
            return res.status(500).json({
                status: "failure",
                data: {
                    statusCode: 500,
                    message: "Failed to add pet"
                }

            })
        }
        return res.status(201).json({
            status: "success",
            data: {
                statusCode: 201,
                value: petGot
            }
        })
    } catch (error) {
        return res.status(500).json({
            status: "failure",
            data: {
                statusCode: 500,
                message: error.message || "Internal server error"
            }

        })
    }
}