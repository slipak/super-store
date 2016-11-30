var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
        title: {
            type: String
        },
        price: {
            type: String
        },
        description: {
            type: String
        },
        imageUrl : {
            type: String
        }
    },
    {
        collection: 'app_products'
    }
);

mongoose.model('app_products', ProductSchema);