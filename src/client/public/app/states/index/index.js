module.exports = [{
    state: "index.home",
    url: "/home",
    views: {
        "": {
            templateUrl: "states/index/home.html",
            controller: ($scope) => {
                $scope.objectTest = {
                    text: "objectTest is working"
                };
            }
        }
    }
},
{
    state: "index.home.test",
    url: "/test",
    views: {
        "": {
            templateUrl: "states/index/home.html",
            controller: ($scope) => {
                $scope.objectTest = {
                    text: "objectTest is working"
                };
            }
        }
    }
}];
