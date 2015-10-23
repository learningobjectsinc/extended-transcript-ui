'use strict';
import _ from 'lodash';
import moment from 'moment';

import template from './competency.html';

import unchecked from '../../../images/unchecked.jpg';
import checked from '../../../images/checked.jpg';

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

      scope.checkMarkStyle = {
        "background-image": 'url(' + (scope.completed ? checked : unchecked) + ')'
      };
      if(scope.competency.date_completed){
          scope.completionDate = moment(scope.competency.date_completed).format("M.D.YY");
      }
    }
  };
}];
