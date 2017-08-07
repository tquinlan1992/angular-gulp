module.exports = [{
    name: "index.home",
    url: "/home",
    views: {
        "": {
            templateUrl: "/app/states/index/home.html",
            controller: ($scope) => {
                $scope.objectTest = {
                    text: "objectTest is working"
                };
            }
        }
    }
},
{
    name: "index.home.test",
    url: "/test",
    views: {
        "": {
            templateUrl: "/app/states/index/home.html",
            controller: ($scope) => {
                $scope.objectTest = {
                    text: "objectTest is working"
                };
            }
        }
    }
}];
