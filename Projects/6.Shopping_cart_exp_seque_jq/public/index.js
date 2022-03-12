
$(
    function () {
        let productList = $('#product-list')

        fetchProducts(function (products) {
            productList.empty()
            for (p of products) {
                productList.append(createProductCard(p))
            }
        })
    }
)