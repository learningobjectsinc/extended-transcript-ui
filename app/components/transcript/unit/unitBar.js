'use strict';
import request from 'superagent';
//import _ from 'lodash';

import template from './unitBar.html';

var ANIMATION_DUR = 10;
var FRAMERATE = 10;

export default ['$timeout', function($timeout){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope:{
      percentage:'=',
      unit:'='
    },
    link: function(scope, element){
      //scope.width
      
    }
  };
}];
