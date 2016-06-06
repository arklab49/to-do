/*global angular */
/*global Firebase */

export default class TodoController {
    constructor($firebaseArray) {
        this.allT = true;



        let ref = new Firebase("https://geoinformatyka.firebaseio.com/items");
        this.todoList = $firebaseArray(ref);
        this.counter = this.todoList.length;
    }
    todoAdd() {
        this.todoList.$add({
            todoText: this.todoInput,
            done: false,
            index: this.counter++
        });
        this.todoInput = "";
        console.log(this.counter);
    }

    remove() {
        var i;
        for (i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].done)
                this.todoList.$remove(i);
        }
        // if(this.doneT) this.showDone();
    }

    checkStatus() {
        var doneTasks = [];
        var activeTasks = [];
        var i;
        for (i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].done)
                doneTasks.push(this.todoList[i]);
            else
               activeTasks.push(this.todoList[i]); 
        }
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