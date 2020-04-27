import { Component, OnInit } from '@angular/core';
import {Exercise} from '../stretch/stretch.model';
import {FunctionalService} from '../functional/functional.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EnergizeService} from './energize.service';

@Component({
  selector: 'app-energize',
  templateUrl: './energize.component.html',
  styleUrls: ['./energize.component.sass']
})
export class EnergizeComponent implements OnInit {

  exercises: Exercise[];
  currentExercise: Exercise;
  index = 0;

  constructor(private exerciseService: EnergizeService,
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
