'use strict';

import _ from 'lodash';
import moment from 'moment';
import mockTranscript from './mockTranscript';

export default ['$http', '$q', function($http, $q){

  //the 'levels' of competencies
  var levels = [
    "Incomplete", "Basic", "Proficient", "Mastered"
  ];

  this.getLevels = function(){
    return levels;
  };

  this.getTranscriptForUser = function(user){
    // //todo: pull this out to siome sort of filter
    // const url = window.lo_api_config ?
    //   window.lo_api_config.root + `/api/v2/users/${user}/transcript`:
    //   `/api/v2/users/${user}/transcript`;
    //
    // return $http.get(url)
    // .then(res => {
    //   return this.convertTranscript(res.data);
    // });
    return $q.when(mockTranscript).then(this.convertTranscript);
  }

  /**
   * Converts an Extended Transcript to one that we can render.
   */
  this.convertTranscript = function(extendedTranscript){
    const transcript = {};
    transcript.user = extendedTranscript.user;
    transcript.progress = extendedTranscript.progress
      //.filter(progress => progress.completed)
      .map(progress => {
        progress.achievement_percent = progress.completed ?
          (levels.indexOf(progress.achievement_level.level) +1) / levels.length
          : 0;
        return progress;
      });

    transcript.created_at = moment(extendedTranscript.created_at).format('MM/DD/YYYY');

    transcript.programs =
      extendedTranscript.progress
        .map(progress => progress.towards)
        .filter(target => target['@type'] === 'Program');

    console.log('computed:', transcript);

    return transcript;
  };
}];
