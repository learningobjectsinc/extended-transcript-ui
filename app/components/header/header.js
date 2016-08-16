'use strict';
import request from 'superagent';

import template from './header.html';
import domain_logo from '../../images/UMUC.png';
import header_bg from '../../images/transcript-bg.jpg';

export default [function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    link: function(scope, element){
      scope.domain_logo = domain_logo;
      scope.bottomHeaderStyle = {
        "background-image": "url(" + header_bg + ")"
      };
    }
  };
}];
