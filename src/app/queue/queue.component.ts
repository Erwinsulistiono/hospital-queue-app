import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { QueueService } from '../services/queue.service';
import { Queue } from '../Queue.interface';
import { faPrint, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
})
export class QueueComponent implements OnInit {
  @Output() onAddQueue: EventEmitter<Queue> = new EventEmitter();
  queue: Queue[] = [];
  printQueue: Queue[] = [];
  faPrint = faPrint;
  faTimes = faTimes;
  faCheck = faCheck;

  constructor(private queueService: QueueService) {}

  ngOnInit(): void {
    this.queueService.getQueue().subscribe((queuing) => (this.queue = queuing));
  }

  onDelete(queue: Queue) {
    this.queueService
      .deleteQueue(queue)
      .subscribe(
        () => (this.queue = this.queue.filter((q) => q.id !== queue.id))
      );
  }

  addQueue(queue: Queue) {
    this.queueService
      .addQueue(queue)
      .subscribe((queuing) => this.queue.push(queuing));
  }

  onUpdate(data: Queue) {
    this.queueService
      .updateQueue(data)
      .subscribe(() =>
        this.queue.map((q) =>
          q.id == data.id
            ? (q.isFinished = true)
            : (q.isFinished = q.isFinished)
        )
      );
  }

  onPrint(data: Queue) {
    this.printQueue.pop();
    this.printQueue.push(data);

    setTimeout(function () {
      print();
    });
  }

  print(): void {
    window.print();
  }
}
