
//Third-party deps
import angular from 'angular';
import 'angular-ui-router';
import 'font-awesome/css/font-awesome.css';

import 'copy!./car.json';

//Styles
import './styles/main.less';

//ET components
import transcriptModule from './components/et/transcriptModule';

export var app = angular.module('et', [
  /*'ui.router',*/
  transcriptModule.name
]);

angular.element(document).ready(function () {
  angular.bootstrap(document, [app.name], {
    //strictDi: true
  });
});
