export default class ProductController {
    constructor (ProductsService) {
        this.test = 123;
        this.ProductsService = ProductsService;
        this.productImage = {};

        this.data = new FormData();

    }


    uploadFiles(files){


        //data.append('fields', );


        console.log(files[0]);
        //$http.post('', data);
        //this.ProductsService.addProduct(data);
        //this._serializeForm();

    }

    _serializeForm(){
        this.data.append('title', this.productTitle);
        this.data.append('description', this.productDescription);
        this.data.append('price', this.productPrice);
    }

    submitHandler(){
        var file = document.getElementById('files');

        console.log(file.files[0]);

        this.data.append('file', file.files[0]);

        //console.log(this.data);

        this._serializeForm();

        console.log(this.data);
        this.ProductsService.addProduct(this.data);
    }

}

ProductController.$inject = ['ProductsService'];