import { secretKey } from "../config/config.js";
import { RegisterUser } from "../schema/model.js";
import { compareHashCode } from "../utils/hashing.js";
import { createToken } from "../utils/token.js";

export const loginUser = async (req, res) => {
    try {
        // User crendential
        // const email = req.body.email
        // const password = req.body.password
        let email = req.query.email
        let password = req.query.password

        // Getting database records

        // const registerEmail = RegisterUser.findOne({ email })
        let user = await RegisterUser.findOne({ email })
        const hashPassword = user.password
        const userpassword = await compareHashCode(password, hashPassword)

        let info = {
            _id: user._id
        }

        if (user !== email) {
            if (userpassword) {

                let token = await createToken(info, secretKey)
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 600000),
                    httpOnly: true,
                    secure: true
                })
                // console.log(req.cookies.jwt)
                res.status(201).send(`Logged In Successfully <br> <br> <button> <a href="/viewDetails">View Details</a></button>`)
            } else {
                res.status(400).send("Password Not matching")
            }
        } else {
            res.status(400).send("No such user exist")
        }
    }
    catch (e) { res.status(400).send("No such user Exist") }
}
export const updatePassword = async (req, res) => {
    try {
        const _id = req.params.id
        const email = req.body.email
        const oldPassword = req.body.oldPassword
        const newPassword = req.body.newPassword
        const user = await RegisterUser.findById({ _id })

        if (user.password === oldPassword) {
            if (user.email === email) {
                const updateUserPassword = await RegisterUser.findByIdAndUpdate(_id, { password: newPassword }, { new: true })
                res.status(200).send(updateUserPassword)
            } else {
                res.status(400).send("Email not matching")
            }
        } else {
            res.status(400).send("Old Password not matching")
        }
    }
    catch (e) { res.status(400).send("Connot change password because of:-" + e.message) }
}