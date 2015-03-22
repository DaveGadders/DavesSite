/**
 * Created by dave on 21/03/15.
 */
var appConfig = function($stateProvider, $urlRouterProvider)
{

    $stateProvider

    /* HOME */
    .state('app.home', {
        url: "/",
        views: {
            templateUrl: "home/home.html",
            controller: 'home/homeController'
        }
    })

    /* PORTFOLIO */
    .state('app.portfolio', {
        url: "/portfolio",
        views: {
            templateUrl: "portfolio/portfolio.html",
            controller: 'portfolio/portfolioController'
        }
    })

    /* EXPERIENCE */
    .state('app.experience', {
        url: "/experience",
        views: {
            templateUrl: "experience/experience.html",
            controller: 'experience/experienceController'
        }
    })

    /* CONTACT */
    .state('app.contact', {
        url: "/contact",
        views: {
            templateUrl: "contact/contact.html",
            controller: 'contact/contactController'
        }
    });

    $urlRouterProvider.otherwise('/');
};