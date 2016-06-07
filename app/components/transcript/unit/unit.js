'use strict';
import request from 'superagent';
import _ from 'lodash';

import template from './unit.html';

export default ['transcriptService', function(transcriptService){
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

      scope.outcomeEvidence = _.chain(scope.unit.competencies)
        .filter(transcriptService.competencyMatchesOutcome(scope.outcome))
        .pluck('evidence')
        .flatten()
        .filter(_ => {return _ != null})
        .map(_ => {
          //todo: support other file types
          _.icon = 'fa-file-pdf-o';
          return _;
        })
        .value();
      scope.evidenceVisible = false;
      scope.toggleEvidence = function(){
        scope.evidenceVisible = !scope.evidenceVisible;
      };
      console.log('got evidence: ', scope.outcomeEvidence);

    }
  };
}];
