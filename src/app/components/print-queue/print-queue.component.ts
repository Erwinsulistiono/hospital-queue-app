import { Component, OnInit, Input } from '@angular/core';
import { Queue } from '../../Queue.interface';

@Component({
  selector: 'app-print-queue',
  templateUrl: './print-queue.component.html',
  styleUrls: ['./print-queue.component.css'],
})
export class PrintQueueComponent implements OnInit {
  @Input() dataQueue: Queue[];
  dataId: string = '609b21a7d6003329e8c46b0c';

  constructor() {}

  ngOnInit(): void {}
}
