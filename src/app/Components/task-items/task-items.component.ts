import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css'],
})
export class TaskItemsComponent implements OnInit {
  @Input() task: Task;
  @Output() delTask: EventEmitter<Task> = new EventEmitter();
  @Output() completeTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteTask(task) {
    this.delTask.emit(task);
  }
  doneTask(task) {
    this.completeTask.emit(task);
  }
}
