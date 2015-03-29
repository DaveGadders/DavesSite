angular.module('DavesApp', ['ngRoute', 'ngMaterial', 'ngMdIcons'])

/* CONTROLLERS */
.controller('homeController', homeController)
.controller('contactController', contactController)
.controller('experienceController', experienceController)
.controller('portfolioController', portfolioController)
.controller('headerController', headerController)
.controller('footerController', footerController)

/* APP */
.config(appConfig);