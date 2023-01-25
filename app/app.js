(function() {
    "use strict";
    var app = angular.module('datatableApp', ['ngRoute','ngRows','angularTreeview','ui.bootstrap','ngPatternRestrict','ngMessages']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'DatatableController',
                templateUrl: 'app/views/datatable.html'
            })
        
            .when('/treeView', {
                controller: 'TreeViewController',
                templateUrl: 'app/views/treeview.html'
            })

            .when('/modalView', {
                controller: 'ModalView',
                templateUrl: 'app/views/modalviewhtml.html'
            })
            .when('/autoComplete', {
                controller: 'AutoCompleteController',
                templateUrl: 'app/views/autoComplete.html'
            })
            .when('/multiselect', {
                controller: 'MultiSelectController',
                templateUrl: 'app/views/multiselect.html'
            })
            .when('/datePicker', {
                controller: 'DatePickerController',
                templateUrl: 'app/views/datePicker.html'
            })
           
            .otherwise( { redirectTo: '/' } );
    });
    
}());