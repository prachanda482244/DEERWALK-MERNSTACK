
const middle = (req, res, next) => {
    let url = req.url
    let method = req.method
    console.log(url)
    console.log(method)
    next()
}
module.exports = middle
