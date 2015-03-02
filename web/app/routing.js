/**
 * @file
 * Contains the routing for the ikApp module.
 */

/**
 * Routing.
 */
angular.module('ikApp').config(function($routeProvider) {
  $routeProvider
    // Frontpage, set to channel overview.
    .when('/', {
      redirectTo: '/channel-overview'
    })

    .when('/admin-sharing', {
      controller: 'AdminSharingController',
      templateUrl: 'app/pages/adminSharing/admin-sharing.html'
    })

    // Overviews
    .when('/channel-overview', {
      controller: 'ChannelOverviewController',
      templateUrl: 'partials/channel/channel-overview.html'
    })
    .when('/slide-overview', {
      controller: 'SlideOverviewController',
      templateUrl: 'partials/slide/slide-overview.html'
    })
    .when('/screen-overview', {
      controller: 'ScreenOverviewController',
      templateUrl: 'partials/screen/screen-overview.html'
    })
    .when('/media-overview', {
      controller: 'MediaOverviewController',
      templateUrl: 'partials/media/media-overview.html'
    })
    .when('/shared-channel-overview', {
      controller: 'SharedChannelOverviewController',
      templateUrl: 'app/pages/sharedChannelOverview/shared-channel-overview.html'
    })

    // Screen
    .when('/screen', {
      controller: 'ScreenController',
      templateUrl: 'app/pages/screen/screen.html'
    })
    .when('/screen/:id', {
      controller: 'ScreenController',
      templateUrl: 'app/pages/screen/screen.html'
    })

    // Slide
    .when('/slide', {
      controller: 'SlideController',
      templateUrl: 'partials/slide/slide.html'
    })
    .when('/slide/:id', {
      controller: 'SlideController',
      templateUrl: 'partials/slide/slide.html'
    })

    // Channel
    .when('/shared-channel/:id/:index', {
      controller: 'SharedChannelController',
      templateUrl: 'app/pages/sharedChannel/shared-channel.html'
    })
    .when('/channel', {
      controller: 'ChannelController',
      templateUrl: 'app/pages/channel/channel.html'
    })
    .when('/channel/:id', {
      controller: 'ChannelController',
      templateUrl: 'app/pages/channel/channel.html'
    })

    // Media
    .when('/media/upload', {
      controller: 'MediaUploadController',
      templateUrl: 'partials/media/media-upload.html'
    })
    .when('/media/:id', {
      controller: 'MediaEditController',
      templateUrl: 'partials/media/media-edit.html'
    })

    .otherwise({redirectTo: '/'});
});
