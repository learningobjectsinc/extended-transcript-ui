import request from 'superagent';
import _ from 'lodash';

import template from './program.html';

export default [function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope:{
      program:'='
    },
    link: function(scope, element){
      console.log('about to render program: ', scope.program);
    }
  };
}];
