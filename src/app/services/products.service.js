export default class ProductsService {
    constructor($http){
        this.$http = $http;
        this.productUrl = 'http://localhost:9999/api/products';
    }


    getAllProducts (){
        return this.$http.get(this.productUrl);
    }

    addProduct(data){
        return this.$http.post(this.productUrl, data, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }
        );
    }

    getOneProduct(pId){
        return this.$http.get(this.productUrl + '/' + pId);
    }

}
ProductsService.$inject = ['$http'];