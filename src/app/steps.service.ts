import { Injectable } from '@angular/core';
import { IStep } from './models/i-step';
import { steps } from './steps-muck';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  constructor() {}

  getSetps(): IStep[] {
    return steps;
  }
}
