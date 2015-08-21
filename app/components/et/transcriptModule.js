import angular from 'angular';
var moduleName = 'transcript';
export default angular.module(moduleName, []);

import transcript from './transcript';

angular.module(moduleName).directive('transcript', transcript);
