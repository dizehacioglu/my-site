app.controller('mainController', function($scope, EmailService){
  $scope.view = {};
  $scope.view.printInfo = function(){
    console.log($scope.view.contact.name, $scope.view.contact.email, $scope.view.contact.message);
    EmailService.sendEmail($scope.view.contact.name, $scope.view.contact.email, $scope.view.contact.message);
  }
})
