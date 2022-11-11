import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {task: "Minha nova task", checked: true},
    {task: "Minha nova task2", checked: false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você realmente deseja apagar tudo?")
    if(confirm) this.taskList = []
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
    console.log(this.taskList);

  }

}
