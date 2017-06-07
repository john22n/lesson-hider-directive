angular.module('directivePractice').controller('lessonCtrl', function($scope) {
    $scope.test ='two way data binding';
    $scope.lesson = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    $scope.announceDay = function(lesson, day) {
        alert(lesson + ' is active on ' + day + '.')

    }
});