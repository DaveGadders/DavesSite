var appConfig = function($routeProvider)
{
    $routeProvider

    /* HOME */
    .when('/', {
        templateUrl: "/app/home/home.html",
        controller: 'homeController'
    })

    /* PORTFOLIO */
    .when('/portfolio', {
        templateUrl: "/app/portfolio/portfolio.html",
        controller: 'portfolioController'
    })

    /* EXPERIENCE */
    .when('/experience', {
        templateUrl: "/app/experience/experience.html",
        controller: 'experienceController'
    })

    /* CONTACT */
    .when('/contact', {
        templateUrl: "/app/contact/contact.html",
        controller: 'contactController'
    })

    .otherwise({
        redirectTo: '/'
    });
};