'use strict';
import request from 'superagent';
import _ from 'lodash';

import template from './outcome.html';

export default ['transcriptService', function(transcriptService){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope:{
      outcome:'=',
      transcript:'='
    },
    link: function(scope, element){
      function avg(a,m,i,p) {
          return a + m/p.length;
      }

      scope.unitsVisible = false;
      var percentage = scope.outcome.achievement_percent;
      /*
          _.chain(scope.transcript.program.courses)
           .pluck("competencies")
           .flatten()
           .filter(transcriptService.competencyMatchesOutcome(scope.outcome))
           .map(transcriptService.competencyIsCompleted)
           .reduce(avg, 0)
           .value();
           */
      scope.percentage = Math.round(percentage*100);
      scope.courseMatchesOutcome = transcriptService.courseMatchesOutcome;
      scope.showDetails = scope.outcome.competencies.length > 0;
    }
  };
}];
