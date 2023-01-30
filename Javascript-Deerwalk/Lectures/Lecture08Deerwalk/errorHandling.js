const log = console.log

try {
    let err = new Error('this is error')
    throw err
    // throw is like return after the error is thrown the code below throw doesnt run
} catch (e) {
    log(e.message)
}