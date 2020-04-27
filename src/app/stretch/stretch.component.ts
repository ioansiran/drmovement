import {Component, OnInit} from '@angular/core';
import {Exercise} from './stretch.model';
import {StretchService} from './stretch.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-stretch',
  templateUrl: './stretch.component.html',
  styleUrls: ['./stretch.component.sass']
})
export class StretchComponent implements OnInit {
  stretches: Exercise[];
  currentStretch: Exercise;
  index = 0;

  constructor(
    private stretchService: StretchService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.stretches = this.stretchService.getAll();
    this.currentStretch = this.stretches[this.index];
  }

  nextStretch(success: boolean) {
    if (this.index < this.stretches.length - 1) {
      if (!success) {
        this.snackBar.open('No worries, try this one');
        // TODO mark as not done in DB
      }
      this.currentStretch = this.stretches[++this.index];
      // TODO mark as done in DB
    } else {
      this.snackBar.open('You have finished the stretching module');
    }
  }
}
