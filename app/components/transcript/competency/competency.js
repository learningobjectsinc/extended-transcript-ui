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
      
      scope.percentage = 
          (scope.levels.indexOf(scope.competency.achievement) + 1) / 
          scope.levels.length;
          
      console.log(scope.competency.achievement);

    }
  };
}];
