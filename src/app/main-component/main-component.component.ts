import { Component } from '@angular/core';
import * as moment  from 'moment';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent
{
  cache:string[] = [];
  tasks:string[][] = [];

  constructor()
  {
    if(localStorage.getItem('cache'))
    {
      this.cache = localStorage.getItem('cache').split(',');

      for(let i=0; i<this.cache.length; i+=2)
      {
        const dateFromNow = moment(this.cache[i +1]).fromNow();
        this.tasks.push([this.cache[i], dateFromNow]);
      };
    }
  }

  addTask()
  {
    const date:string = moment().format();
    const dateFromNow:string = moment(date).fromNow();
    const input:string = (<HTMLInputElement>document.querySelector('.inputTask')).value;

    (<HTMLInputElement>document.querySelector('.inputTask')).value = '';

    if(!input)
    {
      alert(`The input must be contain a task`);
      return;
    }

    this.cache.push(input, date);
    localStorage.setItem('cache', this.cache.join(','));
    this.tasks.push([input, dateFromNow]);
    (<HTMLInputElement>document.querySelector('.inputTask')).focus();
  }

  removeTask(index:number)
  {
    this.tasks.splice(index, 1);
    this.cache.splice(index*2, 2);
    localStorage.setItem('cache', this.cache.join(',')); 
  }
}
