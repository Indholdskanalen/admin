/**
 * @file
 * Shared channel creation controllers.
 */

/**
 * Shared channel controller. Controls the channel creation process.
 */
angular.module('ikApp').controller('SharedChannelController', ['$scope', '$location', '$routeParams', '$timeout', 'screenFactory', 'sharedChannelFactory', 'itkLog',
  function ($scope, $location, $routeParams, $timeout, screenFactory, sharedChannelFactory, itkLog) {
    'use strict';

    $scope.steps = 1;
    $scope.step = 1;
    $scope.channel = {};
    $scope.channel.slides = [];
    $scope.status = 'edit';

    // Get all screens.
    screenFactory.getScreens().then(
      function success(data) {
        $scope.screens = data;
      },
      function error(reason) {
        itkLog.error('Kunne ikke hente bruger.', reason);
      }
    );

    /**
     * Loads a given step.
     */
    function loadStep(step) {
      $scope.step = step;
      $scope.templatePath = '/app/pages/sharedChannel/shared-channel-step' + $scope.step + '.html?' + window.config.version;
    }

    /**
     * Constructor.
     * Handles different settings of route parameters.
     */
    function init() {
      if (!$routeParams.id || !$routeParams.index) {
        $location.path('/channel-sharing-overview');
      } else {
        sharedChannelFactory.getSharedChannel($routeParams.id, $routeParams.index).then(
          function success(data) {
            $scope.channel = JSON.parse(data.content);

            if ($scope.channel === {}) {
              $location.path('/channel-sharing-overview');
            }

            loadStep(1);
          },
          function error(reason) {
            itkLog.error("Delt kanal kunne ikke hentes.", reason);
          }
        );
      }
    }

    init();

    /**
     * Submit a step in the installation process.
     */
    $scope.submitStep = function () {
      $location.path('/channel-sharing-overview');
    };

    /**
     * Change channel creation step.
     * @param step
     */
    $scope.goToStep = function (step) {
      loadStep(step);
    };
  }
]);