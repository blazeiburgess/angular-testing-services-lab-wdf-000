# Use ngMocks and Jasmine/Karma

## Objectives

- Test the created Services

## Instructions

In this repo we have a service named `UserService`. This has two functions.

The first function is to get the user's logged in information from `/rest/user`. Test this method, using `$httpBackend` to mock the response.

The second function is to join the user's first name with their last name, with a space in between. Test that this function returns the expected output.