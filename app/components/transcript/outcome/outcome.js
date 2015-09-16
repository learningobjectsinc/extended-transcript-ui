'use strict';
import request from 'superagent';
import _ from 'lodash';

import './outcome.less';

import template from './outcome.html';

export default ['TranscriptService', function(transcriptService){
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
      scope.courseMatchesOutcome = transcriptService.courseMatchesOutcome;
    }
  };
}];
