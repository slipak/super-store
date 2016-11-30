export default class HomeController {
    constructor(ProductsService){
        this.ProductsService = ProductsService;

        this.products = [];

        this.ProductsService.getAllProducts().then((res)=>{
            this.products = res.data.products;
        });
    }
}

HomeController.$inject = ['ProductsService'];