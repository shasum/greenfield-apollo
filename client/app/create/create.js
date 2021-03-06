angular.module('app.create', [])

.controller('CreateController', ['$rootScope', '$scope', '$location', 'Habits',
  function($rootScope, $scope, $location, Habits) {
    $rootScope.showNav = true;

    $scope.addHabit = function() {
      Habits.addHabit($scope.habit)
        .then(function() {
          $location.path('/dashboard');
        })
        .catch(function(err) {
          console.error(err);
        });
      //console.log('Reminder = ', $scope.reminder, ' || Type = ', typeof($scope.reminder));
      //console.log('Due = ', $scope.due, ' || Type = ', typeof($scope.due));
    };
  }
]);
