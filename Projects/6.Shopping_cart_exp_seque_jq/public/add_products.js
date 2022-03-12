$(
    function () {
        let name = $('#productName')
        let manufacturer = $('#productManufacturer')
        let price = $('#productPrice')
        let btnSubmit = $('#btnSubmit')


        btnSubmit.click(function () {
            console.log("hello")
            console.log(name.val())
            console.log(manufacturer.val())
            console.log(price.val())
            addProducts(name.val(), manufacturer.val(), price.val(), function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to DataBase")
            })
        })
    }
)