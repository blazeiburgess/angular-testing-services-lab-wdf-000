describe('UserService', function () {
  beforeEach(module('app'));

  var UserService, $httpBackend;

  beforeEach(inject(function($injector) {
    UserService = $injector.get('UserService');
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', '/rest/user').respond({user: "Prenom Nom", email: 'a@b.c'});
    // $httpBackend.whenPOST('/rest/user', {first_name: first_name, last_name: last_name}).respond(first_name + " " + last_name);
  }));

  it('should get logged in user information', function (done) {
    $httpBackend.expectGET('/rest/user');
    UserService
      .getUser()
      .then(function(resp) {
	var data = resp.data;
	if (data.email === 'a@b.c' && data.user === 'Prenom Nom') {
	  done();
	}
      });
    $httpBackend.flush();
  });

  it('should create user with fullname', function() {
    var user = {first_name: "Abc", last_name: "123"};
    
    expect(UserService.createFullName({first_name: "Abc", last_name: "123"})).toEqual("Abc 123");

    console.log(UserService.createFullName(user));
    // expect(UserService.createFullName(user)).toEqual(user.first_name + ' ' + user.last_name);
    // $httpBackend.expectPOST('/rest/user', user).respond(201, user.first_name + ' ' + user.last_name)
    // $httpBackend.flush();

    // $httpBackend.expectPOST('/rest/user', user);
    // UserService
    //   .createFullName(user)
    //   .then(function(resp) {
	// if (resp === user.first_name + " " + user.last_name) {
	//   done();
	// }
  //     });
  //   $httpBackend.flush();
  });
});
