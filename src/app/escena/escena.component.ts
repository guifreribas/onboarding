import { Component, Input } from '@angular/core';
import { IStep } from '../models/i-step';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
})
export class EscenaComponent {
  @Input() steps!: IStep[];
  currentStep: number = 0;

  goNextStep(): void {
    this.currentStep++;
    console.log('goNextStep', this.currentStep);
  }

  goPrevStep(): void {
    this.currentStep--;
    console.log('goPrevStep', this.currentStep);
  }

  ngOnInit(): void {
    console.log(this.steps);
  }
}
