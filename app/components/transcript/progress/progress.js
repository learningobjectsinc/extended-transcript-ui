import request from 'superagent';
import _ from 'lodash';

import template from './progress.html';

export default [function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope:{
      progress:'='
    },
    link: function(scope, element){
      console.log('what', scope.progress);
      scope.progressStr = JSON.stringify(scope.progress, null, 2);
    }
  };
}];
