import uiRouter from 'angular-ui-router';

import uiBootstrapModal from 'angular-ui-bootstrap/src/modal'

import appComponent from './app.component';
import components from './components';
import services from './services';




import './app.scss';

const app = angular.module('app', [
    uiRouter,
    uiBootstrapModal,
    components.name,
    services.name
]);

app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('app',{
            template: '<app></app>',
            url: '/app',
            abstract: true
        })
        .state('app.home', {
            template: '<home></home>',
            url: '/home'
        })
        .state('app.home.product', {
            //template: '<home></home>',
            url: '/{productId}',

            onEnter: ['$uibModal', '$state', '$stateParams',
              function($uibModal, $state, $stateParams) {

                    var $modal = $uibModal.open({
                      component: 'productPreview',
                      resolve: {
                        product: ['ProductsService', function(ProductsService){
                              return ProductsService.getOneProduct($stateParams.productId);
                            }]
                      }
                });

                    /*$modal.result.then(null, () => $state.go('^'));

                    this.onExit = function() {
                          $modal.close();
                        }*/
                }]
        })
        .state('app.product', {
            template: '<product></product>',
            url: '/product'
        })
        .state('app.contacts', {
            template: '<contacts></contacts>',
            url: '/contacts'
        });

    $urlRouterProvider.otherwise('/app/home')

}]);

app.component('app', appComponent);

export default app;