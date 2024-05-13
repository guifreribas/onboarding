import { Component, Input } from '@angular/core';
import { IStep } from '../models/i-step';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  query,
  style,
  animate,
  group,
} from '@angular/animations';

const left = [
  query(
    ':enter, :leave',
    style({ position: 'fixed', width: '100%', opacity: 1, scale: 1 }),
    {
      optional: true,
    }
  ),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(-100%)', opacity: 0, scale: 1.3 }),
        animate(
          '.3s ease-out',
          style({ transform: 'translateX(0%)', opacity: 1, scale: 1 })
        ),
      ],

      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate(
          '.3s ease-out',
          style({ transform: 'translateX(100%)', opacity: 0, scale: 1.3 })
        ),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

const right = [
  query(
    ':enter, :leave',
    style({ position: 'fixed', width: '100%', opacity: 1, scale: 1 }),
    {
      optional: true,
    }
  ),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(100%)', opacity: 0, scale: 1.3 }),
        animate(
          '.3s ease-out',
          style({ transform: 'translateX(0%)', opacity: 1, scale: 1 })
        ),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0%)', opacity: 1, scale: 1 }),
        animate(
          '.3s ease-out',
          style({ transform: 'translateX(-100%)', opacity: 0, scale: 1.3 })
        ),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations: [
    trigger('animatedSlide', [
      transition(':decrement', left),
      transition(':increment', right),
    ]),
  ],
})
export class EscenaComponent {
  @Input() steps!: IStep[];
  currentStep: number = 0;

  goNextStep(): void {
    this.currentStep++;
  }

  goPrevStep(): void {
    this.currentStep--;
  }

  goToStep(step: number): void {
    this.currentStep = step;
  }

  ngOnInit(): void {}
}
