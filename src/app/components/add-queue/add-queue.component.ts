import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Queue } from '../../Queue.interface';

@Component({
  selector: 'app-add-queue',
  templateUrl: './add-queue.component.html',
  styleUrls: ['./add-queue.component.css'],
})
export class AddQueueComponent implements OnInit {
  @Input() nextQueue: number;
  @Output() onAddQueue: EventEmitter<Queue> = new EventEmitter();

  name: string;
  phone: string;
  queue: number;
  isFinished: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  changePage(path) {
    this.router.navigate(['/' + path]);
  }

  onSubmit() {
    if (!this.name) return alert(`please add ${this.name}`);

    const newQueue = {
      name: this.name,
      phone: this.phone,
      queue: this.nextQueue,
      isFinished: this.isFinished,
    };

    this.onAddQueue.emit(newQueue);

    this.name = '';
    this.phone = '';
    this.isFinished = false;
  }
}
