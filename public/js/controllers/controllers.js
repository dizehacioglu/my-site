app.controller('mainController', function($scope, EmailService){
  $scope.view = {};
  $scope.view.printInfo = function(){
    EmailService.sendEmail($scope.view.contact.name, $scope.view.contact.email, $scope.view.contact.message);
  }
})
