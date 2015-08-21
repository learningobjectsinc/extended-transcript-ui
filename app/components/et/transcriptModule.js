
import angular from 'angular';
import transcript from './transcript';
var moduleName = 'transcriptModule';

export default angular.module(moduleName, []);

angular.module(moduleName).directive('transcript', transcript);