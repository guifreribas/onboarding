import { Component, Input } from '@angular/core';
import { IStep } from '../models/i-step';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
})
export class EscenaComponent {
  @Input() steps!: IStep[];

  ngOnInit(): void {
    console.log(this.steps);
  }
}
