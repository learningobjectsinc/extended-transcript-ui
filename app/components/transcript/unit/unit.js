'use strict';
import request from 'superagent';
import _ from 'lodash';

import './unit.less';

import template from './unit.html';

export default ['TranscriptService', function(transcriptService){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope:{
      outcome:'=',
      unit:'='
    },
    link: function(scope, element){

      function avg(a,m,i,p) {
          return a + m/p.length;
      }

      var percentage =
          _.chain(scope.unit.competencies)
           .filter(transcriptService.competencyMatchesOutcome(scope.outcome))
           .map(transcriptService.competencyIsCompleted)
           .reduce(avg, 0)
           .value();
      scope.percentage = Math.round(percentage*100);
      scope.competencyMatchesOutcome = transcriptService.competencyMatchesOutcome;
      console.log('course: ', scope.unit, ' is ', scope.percentage, '% complete');

    }
  };
}];
