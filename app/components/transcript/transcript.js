'use strict';
import request from 'superagent';

import template from './transcript.html';
import domain_logo from '../../images/uwc.png';
import moment from "moment";
import _ from 'lodash';

import defaultRop from "file?name=[path][name].[ext]!../rop.json";
import evidenceFile from 'file?name=[path][name].[ext]!../../evidence/118/198234.pdf';

export default ['$http', function($http){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    link: function(scope, element){
      scope.domain_logo_secondary = domain_logo;

      console.log("hmm, got: ", defaultRop);

      scope.transcriptUrl = defaultRop;
      scope.transcriptLoading = true;

      scope.updateTranscript = function(url){
        if(!url || url.length === 0){
          console.log('ignoring empty url: ', url);
          scope.transcript = defaultRop;
          return;
        }
        console.log('fetching transcript from:', url);
        scope.transcriptLoading = true;
        $http.get(url)
        .then(function(res){
          scope.transcriptLoading = false;
          scope.transcript = res.data;
          scope.domain_website = scope.transcript.organization.website;
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
        });
      };
      scope.updateTranscript(defaultRop);
    }
  };
}];
