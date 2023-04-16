import jwt from 'jsonwebtoken'

export const createToken = async (info, secretKey) => {
    try {
        let sign = await jwt.sign(info, secretKey, {
            expiresIn: "365d"
        })
        return sign

    }
    catch (e) {
        console.log("Sorry token cant generate because of: - " + e.message)
    }
}
export const verifyToken = async (token, secretKey) => {
    let verified = await jwt.verify(token, secretKey)
    return verified
}
