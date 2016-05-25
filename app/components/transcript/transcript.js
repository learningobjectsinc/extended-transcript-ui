'use strict';
import request from 'superagent';

import template from './transcript.html';
import atlas_logo from '../../images/Atlas.png';
import moment from "moment";
import _ from 'lodash';

export default ['$http', 'transcriptService', '$stateParams', function($http, transcriptService, $stateParams){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    link: function(scope, element){

      scope.domain_logo_secondary = atlas_logo;

      scope.transcriptLoading = true;

      function logo(transcript, url) {

          if (!url) {
              // TODO: hack for demo
              const isAtlas = transcript.user.givenName === 'Olivia';
              return isAtlas ? atlas_logo : null;
          } else if (!url.startsWith("http")) {
              const host = window.lo_api_config && window.lo_api_config.root
              return host ? host + url : url;
          } else {
              return url;
          }

          scope.domain_logo_secondary = transcript.organization.logo;
      }

      transcriptService.getTranscriptForUser($stateParams.userId)
      .then(transcript => {

        scope.domain_logo_secondary = logo(transcript, transcript.organization.logo);

        console.log("Logo: "+scope.domain_logo_secondary);

        scope.transcriptLoading = false;
        console.log('got:', transcript)
        scope.transcript = transcript;
      });
    }
  };
}];
