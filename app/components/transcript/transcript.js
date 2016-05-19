'use strict';
import request from 'superagent';

import template from './transcript.html';
import domain_logo from '../../images/Atlas.png';
import moment from "moment";
import _ from 'lodash';

export default ['$http', 'TranscriptService', '$stateParams', function($http, transcriptService, $stateParams){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    link: function(scope, element){
      console.log('got:', $stateParams);

      scope.domain_logo_secondary = domain_logo;

      scope.transcriptLoading = true;

      transcriptService.getTranscriptForUser($stateParams.userId);
    }
  };
}];
