import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/Services/task-service.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private ts: TaskServiceService) {}

  ngOnInit(): void {
    this.ts.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task) {
    this.ts
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  doneTask(task) {
    task.done = !task.done;
    this.ts.updateTask(task).subscribe();
  }
  onAddTask(task) {
    this.ts.addTask(task).subscribe((task) => this.tasks.push(task));
  }
  // clearAll() {
  //   this.ts
  //     .clearTask(this.tasks)
  //     .subscribe(() => (this.tasks = this.tasks.filter((t) => (t = !t))));
  // }
}
