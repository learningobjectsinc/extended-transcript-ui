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

  TranscriptService.getTranscriptForUser = function(user){
    //todo: pull this out to siome sort of filter
    const url = window.lo_api_config ?
      window.lo_api_config.root + `/api/v2/users/${user}/transcript`:
      `/api/v2/users/${user}/transcript`;


    return $http.get(url)
    .then(function(res){
      return res.data;
      /*
      scope.transcriptLoading = false;
      scope.transcript = res.data;
      scope.transcript.created_at = moment(scope.transcript.created_at).format('l');
      scope.outcomes = _.chain(scope.transcript.program.courses)
        .pluck("competencies")
        .flatten()
        .map(function(comp){return comp.outcome;})
        .uniq(function(outcome){return outcome["@id"];})
        .value();
      console.log('got response', res);
    }, function(res){
      console.error('got error', res);
      scope.transcriptLoading = false;
      */
    });
  }

  return TranscriptService;
}];
