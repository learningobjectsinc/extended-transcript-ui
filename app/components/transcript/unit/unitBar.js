'use strict';
import request from 'superagent';
//import _ from 'lodash';

import template from './unitBar.html';

var ANIMATION_DUR = 1000; //ms
var FRAMERATE = 25; //one frame per x ms

export default ['$timeout', '$interval', function($timeout, $interval){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope:{
      percentage:'=',
      unit:'=',
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
        scope.progBarStyle.width = scope.percentage + '%';
      });
      
      var elapsedTime = 0;
      var then = new Date();
      var interval = $interval(function(){
        var now = new Date();
        elapsedTime += now - then;
        scope.intervalPercentage = Math.round(
          scope.percentage * Math.min(elapsedTime/ANIMATION_DUR, 1)
        );
        if(elapsedTime > ANIMATION_DUR){
          $interval.cancel(interval);
        }
        then = now;
      }, FRAMERATE);
      
    }
  };
}];
