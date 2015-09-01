'use strict';
import request from 'superagent';
//import _ from 'lodash';

import template from './progBar.html';

var ANIMATION_DUR = 500; //ms
var FRAMERATE = 25; //one frame per x ms

export default ['$timeout', '$interval', function($timeout, $interval){
  return {
    restrict:'E',
    replace:true,
    transclude:true,
    templateUrl:template,
    scope:{
      value:'=',
      animationLength:'='
    },
    link: function(scope, element){
      //scope.width
      var dur = (scope.animationLength || ANIMATION_DUR) / 1000;
      
      scope.intervalPercentage = 0;
      
      scope.progBarStyle = {
        transition: 'width ' + dur + 's ease-out',
      };
      
      $timeout(function(){
        scope.progBarStyle.width = scope.value + '%';
      });
      
      var elapsedTime = 0;
      var then = new Date();
      var interval = $interval(function(){
        var now = new Date();
        elapsedTime += now - then;
        scope.intervalPercentage = Math.round(
          scope.value * Math.min(elapsedTime/ANIMATION_DUR, 1)
        );
        if(elapsedTime > ANIMATION_DUR){
          $interval.cancel(interval);
        }
        then = now;
      }, FRAMERATE);
      
    }
  };
}];
