'use strict';
import request from 'superagent';

import template from './transcript.html';
import domain_logo from '../../images/Atlas.png';
import moment from "moment";
import _ from 'lodash';

export default ['$http', 'transcriptService', '$stateParams', function($http, transcriptService, $stateParams){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    link: function(scope, element){



      scope.domain_logo_secondary = domain_logo;

      scope.transcriptLoading = true;

      transcriptService.getTranscriptForUser($stateParams.userId)
      .then(transcript => {

        // TODO: parameterize the logo
        const isAtlas = transcript.user.givenName === 'Olivia';

        scope.domain_logo_secondary = isAtlas ? domain_logo : null;

        scope.transcriptLoading = false;
        console.log('got:', transcript)
        scope.transcript = transcript;
      });
    }
  };
}];
