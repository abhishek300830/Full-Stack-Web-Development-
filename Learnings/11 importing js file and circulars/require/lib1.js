function sayHello(name) {
    console.log('Hello ' + name)
}
//exporting module to run code on node
module.exports = { sayHello }
console.log(module.exports)

setTimeout(() => {
    module.exports.omg = 'Wow'
}, 1000);