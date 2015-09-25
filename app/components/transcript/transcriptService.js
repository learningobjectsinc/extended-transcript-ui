'use strict';

import _ from 'lodash';

export default ['$http', function($http){
  var TranscriptService = {};

  //the 'levels' of competencies
  var levels = [
    "NonProficient", "Basic", "Proficient", "Distinguished"
  ];

  //returns a function which takes a competency and returns true if the
  //  specified outcome matches the outcome for the competency supplied
  //  to the returned function.
  TranscriptService.competencyMatchesOutcome = function(outcome){
    return function(comp){
      return comp.outcome && comp.outcome['@id'] === outcome['@id'];
    };
  };

  //returns a function which takes a course and returns true if the
  //  specified outcome matches any competencies for the course that was
  //  supplied to the returned function.
  TranscriptService.courseMatchesOutcome = function(outcome){
    return function(course){
        return _.some(
          course.competencies,
          TranscriptService.competencyMatchesOutcome(outcome)
        );
    };
  };

  TranscriptService.competencyIsCompleted = function(competency){
    var percentage = (levels.indexOf(competency.achievement) +1) /
                     levels.length;
    return percentage >= 0.5;
  };

  return TranscriptService;
}];
