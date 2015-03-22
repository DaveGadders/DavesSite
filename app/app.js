/**
 * Created by dave on 21/03/15.
 */
angular.module('davesApp', ['ngRoute', 'ngMaterial'])

/* CONTROLLERS */
.controller('homeController', homeController)
.controller('contactController', contactController)
.controller('experienceController', experienceController)
.controller('portfolioController', portfolioController)

/* APP */
.config(appConfig);