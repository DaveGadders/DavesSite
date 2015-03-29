/**
 * Created by dave on 24/03/15.
 */
var headerController =

    ['$scope',

        function($scope, $timeout, $mdSidenav, $log) {

            /* TOGGLE MENU FROM RIGHT */
            $scope.toggleRight = function() {
                $mdSidenav('right').toggle()
                    .then(function(){
                        $log.debug("toggle RIGHT is done");
                    });
            };

            /* CLOsE MENU TO RIGHT */
            $scope.close = function() {
                $mdSidenav('right').close()
                    .then(function(){
                        $log.debug("close RIGHT is done");
                    });
            };

        }

    ];