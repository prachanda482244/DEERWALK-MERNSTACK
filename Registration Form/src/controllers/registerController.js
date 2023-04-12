import { RegisterUser } from "../schema/model.js";
import { generateHashCode } from "../utils/hashing.js";
export const registerUser = async (req, res) => {
    try {

        // Checking for password and confirm password
        const password = req.body.password
        const confirmPassword = req.body.confirmPassword

        let hashPassword = await generateHashCode(password)

        if (password === confirmPassword) {
            const users = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: hashPassword,
                confirmPassword: undefined,
            }

            const registerNewUser = await RegisterUser.create(users)
            res.status(201).send(registerNewUser)
        } else {
            res.status(400).send("Password not matching")
        }
    } catch (e) { res.status(400).send("Cannot register user because of : - " + e.message) }
}
export const getRegisteredUser = async (req, res) => {
    try {
        const getUser = await RegisterUser.find()
        res.status(200).send(getUser)
    } catch (e) { res.status(400).send("Cannot get user :-" + e.message) }
}

export const deleteRegisteredUser = async (req, res) => {
    try {
        const _id = req.params.id
        const deleteUser = await RegisterUser.findByIdAndDelete(_id)
        res.status(200).send(deleteUser)
    } catch (e) { res.status(400).send(e.message) }
}