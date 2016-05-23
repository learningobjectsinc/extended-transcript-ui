'use strict';
import _ from 'lodash';
import moment from 'moment';

import template from './competency.html';

import unchecked from '../../../images/unchecked.jpg';
import checked from '../../../images/checked.jpg';

export default ['transcriptService', function(transcriptService){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    scope: {
      progress:'='
    },
    link: function(scope, element){

      // todo: what if it's a course achievement?
      scope.competency = scope.progress.towards;

      const percentage = scope.progress.achievement_percent;

      const completed = percentage > 0;

      scope.checkMarkStyle = {
        "background-image": 'url(' + (completed ? checked : unchecked) + ')'
      };
      if(scope.progress.date_completed){
          scope.completionDate = moment(scope.progress.date_completed).format("M.D.YY");
      }
    }
  };
}];
