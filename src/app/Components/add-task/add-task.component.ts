import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  addForm;
  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      input: ['', [Validators.required]],
      importance: ['', [Validators.required]],
      done: ['', [Validators.required]],
    });
  }

  get input() {
    return this.addForm.get('input').value;
  }
  get importance() {
    return this.addForm.get('importance').value;
  }
  get done() {
    return this.addForm.get('done').value;
  }

  ngOnInit(): void {}
  onSubmit() {
    if (!this.input || !this.importance) {
      alert('please enter all details');
    }

    const newTask = {
      id: Date.now(),
      input: this.input,
      importance: this.importance,
      done: this.done,
    };
    this.onAddTask.emit(newTask);
  }
}
