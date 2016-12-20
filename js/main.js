//NativeJS

window.onload = function() {
    document.getElementById("menu").addEventListener("click", menuClick);
    document.getElementById("menuBar").addEventListener("click", coverClick);
    document.getElementById("cover").addEventListener("click", coverClick);
    document.getElementById("kargoSorgula").addEventListener("click", clickSorgula);
}


function clickSorgula() {
    // Do nothing
}

function menuClick() {
    document.getElementById("menuBar").style.left = "0px";
    var cover = document.getElementById("cover");
    cover.style.display = "block";
    setTimeout(function() {
        cover.style.background = "rgba(0,0,0,0.7)";
    }, 10);
}

function coverClick() {
    document.getElementById("menuBar").style.left = "-290px";
    var cover = document.getElementById("cover");
    cover.style.background = "rgba(0,0,0,0)";
    setTimeout(function() {
        cover.style.display = "none";
    }, 400);
}

//AngularJS

var uygulama = angular.module("ngUygulamam", ["ngRoute"]);

uygulama.controller("ngKontrol", function($scope) {
    $scope.deneme = "Deneme String";
});
uygulama.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "template/anasayfa.html"
        })
        .when('/hakkimizda', {
            templateUrl: "template/hakkimizda.html"
        })
        .when('/sorgula', {
            templateUrl: "template/sorgula.html"
        })
        .when('/admin', {
            templateUrl: "template/admin.html"
        })
        .when('/adminlist', {
            templateUrl: "template/adminlist.html"
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
