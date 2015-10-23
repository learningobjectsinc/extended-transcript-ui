'use strict';
import _ from 'lodash';
import moment from 'moment';

import template from './competency.html';

export default ['TranscriptService', function(transcriptService){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope:{
      competency:'=',
      levels:'='
    },
    link: function(scope, element){
      var levels = [
        "Basic", "NonProficient", "Proficient", "Distinguished"
      ];

      scope.percentage =
          (levels.indexOf(scope.competency.achievement) + 1) /
          levels.length;

      scope.completed = transcriptService.competencyIsCompleted(scope.competency);
      if(scope.competency.date_completed){
          scope.completionDate = moment(scope.competency.date_completed).format("M.D.YY");
      }
    }
  };
}];
