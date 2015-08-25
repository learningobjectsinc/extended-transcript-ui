import angular from 'angular';
var moduleName = 'transcript';
export default angular.module(moduleName, []);

import transcript from './transcript';
import unit from './unit/unit';
import unitBar from './unit/unitBar';

angular.module(moduleName).directive('transcript', transcript);
angular.module(moduleName).directive('unit', unit);
angular.module(moduleName).directive('unitBar', unitBar);
