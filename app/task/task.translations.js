angular.module('app.task')
    .config(translationsConfiguration);

/*@ngInject*/
function translationsConfiguration($translateProvider) {
    $translateProvider.translations('en', {
        'menu.tasks': 'Tasks',
        'task.name': 'Name',
        'task.description': 'Description'
    });
}