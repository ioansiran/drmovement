import {Injectable} from '@angular/core';
import {Exercise} from '../stretch/stretch.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionalService {

  constructor() {
  }

  getAll() {
    console.error('implement me');
    return [ new Exercise()];
  }
}
