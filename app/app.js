angular.module('DavesApp', ['ngRoute', 'ngMaterial'])

/* CONTROLLERS */
.controller('homeController', homeController)
.controller('contactController', contactController)
.controller('experienceController', experienceController)
.controller('portfolioController', portfolioController)

/* APP */
.config(appConfig);