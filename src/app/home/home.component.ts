import { Component } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../steps.service';
import { IStep } from '../models/i-step';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private stepService: StepsService) {}
  steps: IStep[] = [];

  getSteps(): void {
    this.steps = this.stepService.getSetps();
  }

  ngOnInit(): void {
    this.getSteps();
  }
}
