'use strict';
import request from 'superagent';
import _ from 'lodash';

import './unit.less';

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
      var levels = scope.levels = [
        "Basic", "NonProficient", "Proficient", "Distinguished"
      ];

      scope.levelsVisible = false;

      //for each competency, get the percentage... then figure out what's left?
      var achievements = _(scope.unit.competencies)
        .map(function(comp){
          return levels.indexOf(comp.achievement) + 1;
        }).value();

      //100% is if you have all competencies finished... so we have to figure out
      //   for every competency, add up all that is needed to finish (an integer
      //   summing all the 'levels' needed) then divide that against the total
      //   amount of levels in the course (the sum of all levels in each competency)
      var toFinish = _.reduce(achievements, function(sum, m){
        return sum + (levels.length - m);
      });

      var haveFinished = _.reduce(achievements, function(sum, m){
        return sum + m;
      });

      //this code assumes that each competency shares a taxonomy of 'levels'
      var totalPossible = achievements.length * levels.length;

      scope.percentage = (haveFinished / totalPossible) * 100;

    }
  };
}];
