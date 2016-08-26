app.factory('EmailService', function($http){
  return {
    sendEmail: function(name, email, message){
      var mailOptions = {
        from: email,
        to: 'dize.hacioglu@gmail.com',
        subject: name,
        text: message
      }
      return $http.post('/', mailOptions)
    }
  }
})
