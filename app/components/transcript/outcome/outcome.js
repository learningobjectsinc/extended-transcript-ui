'use strict';
import request from 'superagent';
import _ from 'lodash';

import './outcome.less';

import template from './outcome.html';

export default [function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope:{
      outcome:'=',
      transcript:'='
    },
    link: function(scope, element){
      var levels = scope.levels = [
        "Basic", "NonProficient", "Proficient", "Distinguished"
      ];

      scope.unitsVisible = false;

      scope.percentage = "50";

      //returns true if the supplied course has a competency that maps to
      //    the scoped outcome
      scope.courseHasOutcome = function(course){
          return _.chain(course.competencies)
            .pluck("outcome")
            .some(function(out){
              return out["@id"] === scope.outcome["@id"];
            })
            .value();
      };
    }
  };
}];
