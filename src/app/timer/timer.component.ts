import { Component, OnInit, Input } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() intervalo: number;

  constructor(public timer: TimerService) {
    this.timer.start(this.intervalo * 1000);
  }

  ngOnInit() {}
}
