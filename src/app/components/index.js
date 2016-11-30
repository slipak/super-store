import home from './home/home.component';
import contacts from './contacts/contacts.component';
import product from './product/product.component';
import productPreview from './product.preview/product.preview.component';

const module = angular.module('app.components', []);

module.component('home', home);
module.component('contacts', contacts);
module.component('product', product);
module.component('productPreview', productPreview);

export default module;