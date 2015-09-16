'use strict';
import request from 'superagent';

import template from './transcript.html';
import domain_logo_secondary from '../../images/aau_blue.jpg';
import moment from "moment";
import _ from 'lodash';
import './transcript.less';

import defaultRop from "json!../rop.json";

export default ['$http', function($http){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    link: function(scope, element){
      scope.domain_logo_secondary = domain_logo_secondary;

      //TODO: remove this when scope clears
      window.onkeypress = function(e){
        if(e.keyCode === 113){
          scope.debug = !scope.debug;
          scope.$apply();
        }
      };

      scope.updateTranscript = _.debounce(function(url){
        if(!url || url.length === 0){
          console.log('ignoring empty url: ', url);
          scope.transcript = defaultTranscript;
          return;
        }
        console.log('fetching transcript from:', url);
        scope.transcriptLoading = true;
        $http.get(url)
        .then(function(res){
          scope.transcriptLoading = false;
          scope.transcript = res.data;
          console.log('got response', res);
        }, function(res){
          console.error('got error', res);
          scope.transcriptLoading = false;
        });
      }, 1000);

      var defaultTranscript = scope.transcript = defaultRop;

      defaultTranscript.created_at =
          moment(defaultTranscript.created_at).format('l');

      //let's compute the transcript's outcomes
      scope.outcomes = _.chain(scope.transcript.program.courses)
        .pluck("competencies")
        .flatten()
        .map(function(comp){return comp.outcome;})
        .uniq(function(outcome){return outcome["@id"];})
        .value();
    }
  };
}];
