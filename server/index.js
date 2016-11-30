var express = require('express');
var path = require('path');

var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './server/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage })

var bodyParser = require('body-parser');
var cors =  require('cors');
var override = require('method-override');
var morgan = require("morgan");

var app = express();
var port = 9999;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(override());
app.use(morgan('dev'));

var server = app.listen(port, function () {
    console.log('Server runs on port ' + port +'.');
});

var mongoose = require('mongoose');
var db = require('./db/config');
mongoose.connect(db.url);

var apiRouter = express.Router();

var productAPI = require('./db/handlers/products');



apiRouter.route('/products')
    .get(productAPI.getAllProducts)

    //.post(productAPI.createProduct);


apiRouter.post('/products', upload.single('file'), function (req, res, next) {
    req.body.imageUrl = 'http://localhost:9999/api/images/' + req.file.filename;

    next();

}, productAPI.createProduct);

apiRouter.use('/images', express.static(path.resolve(__dirname + '/uploads')));


apiRouter.route('/products/:id')
    .get(productAPI.getOne);

app.use('/api', apiRouter);
