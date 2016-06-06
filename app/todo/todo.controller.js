/*global angular */

export default class TodoController {
	constructor() {
    this.todoList = [{todoText:'First Task', done:false}];
    this.allT = true;
}
    todoAdd() {
        this.todoList.push({todoText:this.todoInput, done:false});
        this.todoInput = "";
    }

    remove() {
        var oldList = this.todoList;
        var newList = [];
        this.todoList = [];
        angular.forEach(oldList, function(x) {
             if (!x.done) {
            	newList.push(x);
        	}
        });
        this.todoList = newList;
        this.checkStatus();
    }
    
    checkStatus() {
    	var oldList = this.todoList;
        var doneTasks = [];
        var activeTasks = [];
        angular.forEach(oldList, function(x) {
             if (x.done) doneTasks.push(x);
        				else activeTasks.push(x);
        });
        this.doneTasks = doneTasks;
        this.activeTasks = activeTasks;
    }
    
    showAll() {
    	this.checkStatus();
    	this.activeT = false;
    	this.doneT = false;
    	this.allT = true;
    }
    
    showActive() {
    	this.checkStatus();
    	this.activeT = true;
    	this.doneT = false;
    	this.allT = false;
    }
    
    showDone() {
    	this.checkStatus();
    	this.doneT = true;
    	this.allT = false;
    	this.activeT = false;
    }
}