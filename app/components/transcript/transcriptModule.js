import angular from 'angular';
var moduleName = 'transcript';
export default angular.module(moduleName, []);

import transcript from './transcript';
import transcriptService from './transcriptService';
import outcome from './outcome/outcome';
import unit from './unit/unit';
import competency from './competency/competency';
import program from './program/program';

angular.module(moduleName).directive('transcript', transcript);
angular.module(moduleName).directive('outcome', outcome);
angular.module(moduleName).directive('unit', unit);
angular.module(moduleName).directive('competency', competency);
angular.module(moduleName).directive('program', program);
angular.module(moduleName).service('transcriptService', transcriptService);
