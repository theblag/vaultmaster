function generator(length) {
    const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$*()0123456789"
    const spChar = "[]{}()@#$*-?"
    // let length = 13
    let password = ""
    const check = Math.floor(Math.random() * (7 - 4 + 1)) + 4
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * 68)
        const spindex = Math.floor(Math.random() * 10)
        if (i == check) {
            password += spChar[spindex]
        }
        else {
            password += pool[index]
        }
    }
    return (password)
}
export default generator;