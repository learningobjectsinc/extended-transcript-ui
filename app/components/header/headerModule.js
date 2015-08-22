import angular from 'angular';
var moduleName = 'header';
export default angular.module(moduleName, []);

import header from './header';

angular.module(moduleName).directive('header', header);
