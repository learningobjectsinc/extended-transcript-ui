'use strict';
import _ from 'lodash';
import './competency.less';

import template from './competency.html';

export default [function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope:{
      competency:'=',
      levels:'='
    },
    link: function(scope, element){
      var levels = [
        "Basic", "NonProficient", "Proficient", "Distinguished"
      ];
      
      scope.percentage = 
          (levels.indexOf(scope.competency.achievement) + 1) / 
          levels.length;

      scope.completed = scope.percentage > 0.5;
      console.log('got: ', scope.completed);
    }
  };
}];
