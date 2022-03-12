function fetchProducts(done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}
function addProducts(name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price,
    }, function (data) {
        done(data)
    }
    )
}
function createProductCard(Product) {
    return $(
        `
        <div class="col-5 card m-3 p-3">
          <h2 class="product-name">${Product.name}</h2>
          <div class="product-manufacturer">${Product.manufacturer}</div>
          <div class="row">
            <div class="col m-1 p-1">Rs. ${Product.price}</div>
            <button class="col btn btn-primary m-2">Buy</button>
          </div>
          <br />
        </div>
        `
    )
}