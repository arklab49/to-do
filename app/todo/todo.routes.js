export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./todo.html'),
      controller: 'TodoController',
      controllerAs: 'todo'
    });
}