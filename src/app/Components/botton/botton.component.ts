import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botton',
  templateUrl: './botton.component.html',
  styleUrls: ['./botton.component.css'],
})
export class BottonComponent implements OnInit {
  @Input() text: String;
  @Input() color: String;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  add() {
    this.btnClick.emit();
  }
}
