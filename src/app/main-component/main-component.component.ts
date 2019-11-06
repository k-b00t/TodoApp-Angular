import { Component } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent
{
  tasks:string[] = [];

  constructor()
  {
    if(localStorage.getItem('cache')) this.tasks = localStorage.getItem('cache').split(',');
  }

  addTask()
  {
    const input:string = (<HTMLInputElement>document.querySelector('.inputTask')).value;

    if(!input)
    {
      alert(`The input must be contain a task`);
      return;
    }

    (<HTMLInputElement>document.querySelector('.inputTask')).value = '';

    this.tasks.push(input);
    localStorage.setItem('cache', this.tasks.join(','));
  }

  removeTask(index:number)
  {
    this.tasks.splice(index, 1);
    localStorage.setItem('cache', this.tasks.join(',')); 
  }
}
