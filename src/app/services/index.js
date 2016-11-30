import ProductsService from './products.service';

const module = angular.module('app.services', [])
    .service('ProductsService', ProductsService);

export default module;