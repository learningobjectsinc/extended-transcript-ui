'use strict';
import request from 'superagent';

import template from './transcript.html';
import domain_logo_secondary from '../../images/aau_blue.jpg';
import _ from 'lodash';
import './transcript.less';

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

      var defaultTranscript = scope.transcript = {
          "@context": {
              "@vocab": "http://purl.kinexis.com:8888/ctx/cbe/v1/record_of_performance/"
          },
          "@id": "http://purl.kinexis.com:8888/6675c410-1d03-0133-b54c-406c8f40a599",
          "@type": "RecordOfPerformance",
          "created_at": "2015-08-04T11:20:25-07:00",
          "organization": {
              "@id": "http://purl.kinexis.com:8888/organizations/7",
              "legal_name": "IMS Learning Institute, LLC",
              "website": "ili.imsglobal.org"
          },
          "program": {
              "@id": "http://purl.kinexis.com:8888/programs/7",
              "courses": [
                  {
                      "@id": "http://purl.kinexis.com:8888/course_sections/61",
                      "competencies": [
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/115",
                              "achievement": "Basic",
                              "label": "",
                              "statement": "Examine the use of critical, strategic, and ethical thinking in decision-making"
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/116",
                              "achievement": "Distinguished",
                              "label": "mba6004-1",
                              "statement": "Integrate the Internet, collaboration, and virtual environment strategies into general business management planning and decision-making."
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/117",
                              "achievement": "NonProficient",
                              "label": "mba6004-2",
                              "statement": "Integrate business strategies into general business management planning and decision-making."
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/118",
                              "achievement": "Basic",
                              "label": "mba6004-3",
                              "statement": "Analyze relevant global business concerns for the future."
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/119",
                              "achievement": "Basic",
                              "label": "mba6004-4",
                              "statement": "Communicate in a manner that is professional and consistent with expectations for members of the business professions."
                          }
                      ],
                      "label": "MBA-FP6004-1",
                      "title": "MBA-FP 6004 Section 1"
                  },
                  {
                      "@id": "http://purl.kinexis.com:8888/course_sections/63",
                      "competencies": [
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/120",
                              "achievement": "Proficient",
                              "label": "mba6006-1",
                              "statement": "Analyze contemporary leadership models and practices from the perspective of innovation in a global environment."
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/121",
                              "achievement": "Distinguished",
                              "label": "mba6006-2",
                              "statement": "Assess the behaviors that drive innovation and how leaders can use those behaviors to create innovative organizations."
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/122",
                              "achievement": "Basic",
                              "label": "mba6006-3",
                              "statement": "Assess what leaders of innovation do to shape organizational culture and processes."
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/123",
                              "achievement": "NonProficient",
                              "label": "mba6006-4",
                              "statement": "Communicate in a manner that is professional and consistent with expectations for members of the business professions."
                          }
                      ],
                      "label": "MBA-FP6006-1",
                      "title": "MBA-FP 6006 Section 1"
                  },
                  {
                      "@id": "http://purl.kinexis.com:8888/course_sections/64",
                      "competencies": [
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/124",
                              "achievement": "Basic",
                              "label": "mba6008-1",
                              "statement": "Apply the theories, models, and practices of economic theory to create value for the firm."
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/125",
                              "achievement": "NonProficient",
                              "label": "mba6008-2",
                              "statement": "Assess the impact of ethical and regulatory considerations on economic decisions"
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/126",
                              "achievement": "Distinguished",
                              "label": "mba6008-3",
                              "statement": "Analyze the macroeconomic environment of corporate operations"
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/127",
                              "achievement": "NonProficient",
                              "label": "mba6008-4",
                              "statement": "Analyze the microeconomic environment of corporate operations"
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/128",
                              "achievement": "Basic",
                              "label": "mba6008-5",
                              "statement": "Communicate in a manner that is professional and consistent with expectations for members of the business professions.ply collaborative techniques to the virtual environment."
                          }
                      ],
                      "label": "MBA-FP6008-1",
                      "title": "MBA-FP 6008 Section 1"
                  },
                  {
                      "@id": "http://purl.kinexis.com:8888/course_sections/69",
                      "competencies": [
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/124",
                              "achievement": "Basic",
                              "label": "mba6008-1",
                              "statement": "Apply the theories, models, and practices of economic theory to create value for the firm."
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/125",
                              "achievement": "Distinguished",
                              "label": "mba6008-2",
                              "statement": "Assess the impact of ethical and regulatory considerations on economic decisions"
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/126",
                              "achievement": "Basic",
                              "label": "mba6008-3",
                              "statement": "Analyze the macroeconomic environment of corporate operations"
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/127",
                              "achievement": "Basic",
                              "label": "mba6008-4",
                              "statement": "Analyze the microeconomic environment of corporate operations"
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/128",
                              "achievement": "Proficient",
                              "label": "mba6008-5",
                              "statement": "Communicate in a manner that is professional and consistent with expectations for members of the business professions.ply collaborative techniques to the virtual environment."
                          }
                      ],
                      "label": "MBA-FP6008-1",
                      "title": "MBA-FP 6008 Section 1"
                  },
                  {
                      "@id": "http://purl.kinexis.com:8888/course_sections/70",
                      "competencies": [
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/129",
                              "achievement": "Basic",
                              "label": "mba6012-1",
                              "statement": "Apply theories, models, and practices of marketing"
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/130",
                              "achievement": "Proficient",
                              "label": "mba6012-2",
                              "statement": "Integrate fundamental principles and applications of marketing to address business problems."
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/131",
                              "achievement": "NonProficient",
                              "label": "mba6012-3",
                              "statement": "Develop innovative and sustainable solutions to strategic marketing challenges"
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/132",
                              "achievement": "Distinguished",
                              "label": "mba6012-4",
                              "statement": "Integrate marketing analyses into general business management planning and decision making"
                          },
                          {
                              "@id": "http://purl.kinexis.com:8888/competencies/133",
                              "achievement": "NonProficient",
                              "label": "mba6012-5",
                              "statement": "Communicate in a manner that is professional and consistent with expectations for members of the business professions"
                          }
                      ],
                      "label": "MBA-FP6012-1",
                      "title": "MBA-FP 6012 Section 1"
                  }
              ],
              "degree_level": "MBA", //should this be generically "Master's"? as in... Associates, Bachelors, Masters, Phd, etc...
              "label": "Master of Business Administration FP"
          },
          "tool_consumer_profile": {
              "@id": "http://purl.kinexis.com:8888/lti2_tc/tool_consumer_profiles/",
              "lti_version": "LTI-2p0",
              "product_name": "Elan/LuMoS",
              "service_provider_name": "Elan University"
          },
          "user": {
              "@id": "http://purl.kinexis.com:8888/users/14",
              "email": "tarne@hotmail.com",
              "familyName": "Arne",
              "givenName": "Tom",
              "sourced_id": '000330'
          }
      };
    }
  };
}];
