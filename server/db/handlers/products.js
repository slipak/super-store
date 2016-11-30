var Product = require('mongoose').model('app_products');

function createProduct(req, res) {
    Product.create(req.body, function(err, product){
        if (err) {
            res.json({
                success: false,
                errors: err
            });
            return;
        }
        res.json({
            success: true,
            message: 'Product has been created!',
            product: product
        })
    })

}
function getAllProducts(req, res) {
    Product.find({}, function(err, products){
        if(err) {
            throw err;
        }
        res.json({
            success: true,
            products: products
        })
    })
}
function getOne(req, res) {

    var id = req.params.id;

    Product.findById(id, function(err, product) {

        if (err){
            res.json({
                success: false,
                errors: err
            });
            return;
        }

        res.json({
            success: true,
            product: product
        });
    })

}

module.exports = {
    getAllProducts: getAllProducts,
    createProduct: createProduct,
    getOne: getOne
};