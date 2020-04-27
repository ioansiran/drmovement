import {Component, OnInit} from '@angular/core';
import {Exercise} from '../stretch/stretch.model';
import {StretchService} from '../stretch/stretch.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FunctionalService} from './functional.service';

@Component({
  selector: 'app-functional',
  templateUrl: './functional.component.html',
  styleUrls: ['./functional.component.sass']
})
export class FunctionalComponent implements OnInit {
  exercises: Exercise[];
  currentExercise: Exercise;
  index = 0;

  constructor(private exerciseService: FunctionalService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.exercises = this.exerciseService.getAll();
    this.currentExercise = this.exercises[this.index];
  }

  nextExercise(success: boolean) {
    if (this.index < this.exercises.length - 1) {
      if (!success) {
        this.snackBar.open('No worries, try this one');
        // TODO mark as not done in DB
      }
      this.currentExercise = this.exercises[++this.index];
      // TODO mark as done in DB
    } else {
      this.snackBar.open('You have finished the stretching module');
    }
  }
}
