import { Component } from '@angular/core';
import { StepsService } from '../steps.service';
import { IStep } from '../models/i-step';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
})
export class EscenaComponent {
  constructor(private stepService: StepsService) {}
  steps: IStep[] = [];

  getSteps(): void {
    this.steps = this.stepService.getSetps();
  }

  ngOnInit(): void {
    this.getSteps();
  }
}
