import angular from 'angular';
var moduleName = 'ui';
export default angular.module(moduleName, []);

import progBar from './progBar/progBar';

angular.module(moduleName).directive('progBar', progBar);
