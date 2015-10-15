'use strict';
import request from 'superagent';

import template from './header.html';
import domain_logo from '../../images/Atlas.png';

export default [function(){
  return {
    restrict:'E',
    replace:true,
    templateUrl:template,
    link: function(scope, element){
      scope.domain_logo = domain_logo;
    }
  };
}];
