const route = require('express').Router()
const Product = require('../../db').Product

route.get('/', (req, res) => {
    //get all products
    Product.findAll()
        .then((product) => {
            res.status(200).send(product)
        })
        .catch((error) => {
            res.status(500).send({
                error: "Could not Retrieve"
            })
        })
})
route.post('/', (req, res) => {
    //Validate a Number
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not a Numbers"
        })
    }
    // add product 
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)

    }).then((product) => {
        res.status(201).send(product)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not ADD Product"
        })
    })
})


exports = module.exports = route