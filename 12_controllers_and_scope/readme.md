The previous exercise used Angular's two-way data-binding without having to declare a controller because Angular automatically
created a controller and added the name to the controller's scope when the text input changed.

In this exercise we will create a new javascript file in our public directory to write our angular code.
This file will declare a new module (Angular's way of code isolation) ```codepot-todo``` and controller ```TodoCtrl```. The controller's method will get run when the page is first loaded; Lets add the current time of day to the scope and display this in the html.

Be sure to apply the module ```ng-app="codepot-todo"``` and controller ```ng-controller="TodoCtrl"`` to elements on the html page so they will be loaded

-----------------------------

## HINTS

New controllers must be declared on a module by chaining their declaration to the module object. For this exercise we can create a new module and controller:
```
angular.module('codepot-todo', [])
  .controller('TodoCtrl', ...
```

Angular uses dependency injection to pass necessary services, such as the controllers $scope:
```
  .controller('TodoCtrl', function TodoCtrl($scope) {
    ...
   });
```

You can use ```Date.now()``` to get the current date and use the Angular [date filter](https://docs.angularjs.org/api/ng/filter/date) to pretty format it
