import {Component} from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: "./app/app.component.html",
    styleUrls: ["./app/app.component.css"],
})
export class AppComponent { 
    title : string;
    todos : string[];
    constructor(){
        this.title = "TODO APP";
        this.todos = ["JavaScript","TypeScript","Angular2"];
    }
    
    addTodo(input: HTMLInputElement){
        let title = input.value;
        input.value = "";
        this.todos.push(title);
    }
}
