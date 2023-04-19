import { verifyToken } from "../utils/token.js"
import { secretKey } from "../config/config.js"
import { RegisterUser } from "../schema/model.js"
export const auth = async (req, res, next) => {
    try {
        // let bearerToken = req.headers.authorization;
        // let token = bearerToken.split(" ")[1];
        // console.log(token);
        const token = req.cookies.jwt
        // const token = req.headers.authorization
        const verifyUser = await verifyToken(token, secretKey)

        const user = await RegisterUser.findOne({ _id: verifyUser._id })

        req.token = token
        req.user = user

        next()

    } catch (error) {
        res.status(401).send("Unauthorised user - login first")
    }
}