//This is here because babel hoists imports, and we need the public path set
// before all the other imports resolve.
import './init';

//Third-party deps
import angular from 'angular';
import angular_ui_router from 'angular-ui-router';
//import 'bootstrap';
import 'font-awesome/css/font-awesome.css';

//Styles
import 'bootstrap/dist/css/bootstrap.css';

//ET components
import headerModule from './components/header/headerModule';
import transcriptModule from './components/transcript/transcriptModule';
import uiModule from './components/ui/uiModule';

export var app = angular.module('et', [
  /*'ui.router',*/
  headerModule.name,
  transcriptModule.name,
  uiModule.name,
  angular_ui_router
]);

app.config(['$httpProvider', function($httpProvider) {
  if(window.lo_api_config){
    $httpProvider.defaults.headers.common['Authorization'] = `Bearer ${window.lo_api_config.apiKey}`;
  }
}]);

app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('userTranscript', {
      url: "/:userId",
      template: '<transcript></transcript>'
    })
    .state('transcripts', {
      url: "/",
      template: '<div>Base</div>'
    });
}]);

angular.element(document).ready(function () {
  angular.bootstrap(document, [app.name], {
    //strictDi: true
  });
});
