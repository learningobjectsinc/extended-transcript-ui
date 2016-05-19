'use strict';

import _ from 'lodash';
import moment from 'moment';

export default ['$http', function($http){

  //the 'levels' of competencies
  var levels = [
    "NonProficient", "Basic", "Proficient", "Distinguished"
  ];

  this.getTranscriptForUser = function(user){
    //todo: pull this out to siome sort of filter
    const url = window.lo_api_config ?
      window.lo_api_config.root + `/api/v2/users/${user}/transcript`:
      `/api/v2/users/${user}/transcript`;

    return $http.get(url)
    .then(res => {
      return this.convertTranscript(res.data);
    });
  }

  /**
   * Converts an Extended Transcript to one that we can render.
   */
  this.convertTranscript = function(extendedTranscript){
    const transcript = {};
    transcript.user = extendedTranscript.user;
    transcript.progress = extendedTranscript.progress;

    console.log('uh, got: ', transcript.progress);
    transcript.created_at = moment(extendedTranscript.created_at).format('MM/DD/YYYY');

    transcript.programs =
      extendedTranscript.progress
        .map(progress => progress.towards)
        .filter(target => target['@type'] === 'Program');

    return transcript;
  };
}];
