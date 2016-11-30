export default class FileUpload {
    constructor(){
        this.restrict = 'A';
        this.template = '<input type="file"/>';
        this.scope = {};
        this.controllerAs = '$ctrl';

        //this.bindToController = true;

    }

    link(scope, element, attributes){
        element.bind("change", function (changeEvent) {
            console.log(element.value());
        });
    }

}