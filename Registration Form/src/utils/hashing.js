import bcrypt from 'bcryptjs'

export const generateHashCode = async (password) => {
    let hashCode = await bcrypt.hash(password, 10)
    return hashCode
}

export const compareHashCode = async (password, hashCode) => {
    let isValid = await bcrypt.compare(password, hashCode)
    return isValid
}

