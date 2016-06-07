/*global angular */
/*global Firebase */

export default class TodoController {
    constructor($firebaseArray) {
        
        let ref = new Firebase("https://geoinformatyka.firebaseio.com/items");
        this.todoList = $firebaseArray(ref);
        this.counter = this.todoList.length;
        this.mail = null;
        this.showAllStats = true;
        this.statsMessage = "Show only my tasks";
        
        this.allT = true;
        this.error = false;
        this.guest = true;
        this.allTasksCounter = 0;
        this.activeTasksCounter = 0;
        this.doneTasksCounter = 0;
        this.myAllTasksCounter = 0;
        this.myActiveTasksCounter = 0;
        this.myDoneTasksCounter = 0;
    }
    todoAdd() {
        
        if (this.mail == null) {
            this.errorMessage = "You are not log in!"
        }
        else {
            this.errorMessage = null;
            this.todoList.$add({
                todoText: this.todoInput,
                done: false,
                index: this.counter++,
                mail: this.mail
            });
            this.todoInput = "";
            this.calcStats();
        }

    }

    remove() {
        var i;
        for (i = 0; i < this.todoList.length; i++) {
            if(this.mail == this.todoList[i].mail){
                if (this.todoList[i].done)
                    this.todoList.$remove(i);
                this.errorMessage = null;
                this.calcStats();
            }
            else
                this.errorMessage = "This task does not belong to you!";
        }
        this.calcStats();
    }

    showAll() {
        this.activeT = false;
        this.doneT = false;
        this.allT = true;
    }

    showActive() {
        this.activeT = true;
        this.doneT = false;
        this.allT = false;
    }

    showDone() {
        this.doneT = true;
        this.allT = false;
        this.activeT = false;
    }


    logIn() {
        this.errorMessage = null;
        this.guest = false;
        this.calcStats();
    }
    
    logOut() {
        this.guest = true;
        this.mail = null;
        this.showAllStats = true;
        this.errorMessage = null;
        this.showAll();
    }
    
    showStats() {
        this.calcStats();
        if (!this.showAllStats) {
            this.statsMessage = "Show only my tasks";
            this.showAllStats = true;
            
        }
        else {
            this.statsMessage = "Show all tasks";
            this.showAllStats = false;
        }
            
    }
    
    calcStats() {
        var i;
        this.allTasksCounter=0;
        this.activeTasksCounter=0;
        this.doneTasksCounter = 0;
        this.myAllTasksCounter = 0;
        this.myActiveTasksCounter = 0;
        this.myDoneTasksCounter = 0;
        for (i = 0; i < this.todoList.length; i++) {
                this.allTasksCounter++;
                 if(this.todoList[i].mail == this.mail)
                    this.myAllTasksCounter++;
            if (!this.todoList[i].done){
                this.activeTasksCounter++;
                     if(this.todoList[i].mail == this.mail)
                         this.myActiveTasksCounter++;
             }
            else {
                this.doneTasksCounter++;
                    if(this.todoList[i].mail == this.mail)
                         this.myDoneTasksCounter++;
            }
        }           
        
    }
}