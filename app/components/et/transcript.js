import request from 'superagent'

export default [function(){
  return {
    restrict:'E',
    replace:true,
    template:'<div><h1>{{transcript.user.familyName}}, {{transcript.user.givenName}}</h1></div>',
    link: function(scope, element){
      request
        .get('http://example.com/rop.json')
        .end(function(err, res){
          console.log('got:', err, res);
          scope.transcript = res.body;
          scope.$apply();
          // Calling the end function will send the request
        });
    }
  };
}];