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
        }
    }

    remove() {
        var i;
        for (i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].done)
            if(this.mail == this.todoList[i].mail){
                this.todoList.$remove(i);
                this.errorMessage = null;
            }
            else
                this.errorMessage = "This task does not belong to you!"
        }
            this.showMyList();
        if (this.doneT == true){
           this.showDone();
           console.log("Jestemn");
        } 
    }
    
     checkStatus() {
        var tempList = [];
        if (this.showAllStats) 
            tempList = this.todoList;
        else{
            this.showMyList();
            tempList = this.myAllTasksList;
        }
        var doneTasks = [];
        var activeTasks = [];
        var i;
        for (i = 0; i < tempList.length; i++) {
            if (tempList[i].done)
                doneTasks.push(tempList[i]);
            else
                activeTasks.push(tempList[i]);
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

    logIn() {
        this.errorMessage = null;
        var i;
        this.guest = false;
        this.calcStats();
    }
    
    logOut() {
        this.guest = true;
        this.mail = null;
        this.showAllStats = true;
        this.errorMessage = null;
    }
    
    checkUserTasks($event,i) {
        if ($event.target.checked){
            this.todoList[i].completed = true;
            this.calcStats();
        }
        else {
            this.todoList[i].completed = false;
            this.calcStats();
        }
        this.checkStatus();
    }
    
    showStats() {
        this.calcStats();
        this.showMyList();
        if (!this.showAllStats) {
            this.statsMessage = "Show only mine tasks";
            this.showAllStats = true;
            
        }
        else {
            this.statsMessage = "Show all tasks";
            this.showAllStats = false;
        }
            
    }
    
    showMyList() {
        var i;
            var myAllTasksList =[];
            
            for (i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].mail == this.mail)
                myAllTasksList.push(this.todoList[i]);
                
            this.myAllTasksList = myAllTasksList;
            // this.checkStatus2();
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