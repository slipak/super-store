import FileUpload from './file.upload';

const module = angular.module('app.directives', [])
    .directive('fileUpload', () => new FileUpload());

export default module;