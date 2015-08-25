'use strict';
import request from 'superagent';
//import _ from 'lodash';

import template from './unit.html';

export default [function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope:{
      unit:'='
    },
    link: function(scope, element){
      console.log('linking unit');
      //get a roll up of each competency?
      /*
      var achievements = {};
      _.each(scope.unit.competencies, function(comp){
        achievements[comp.achievement] = true;
      });
      
      scope.a = [];
      for(var a in achievements){
        scope.a.push(a);
      }
      */
      
    }
  };
}];
