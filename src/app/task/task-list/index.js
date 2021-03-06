import angular from 'angular';
import TasksComponent from './task-list.component';
import translations from './translations';

export default angular.module('app.task.task-list', [])
  .component(TasksComponent.selector, TasksComponent)
  .config(translations)
  .name;
