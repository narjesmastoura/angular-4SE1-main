import { Component } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  apartNum!: number;
  floorNum!: number;
  surface!: number;
  terrace!: boolean;
  surfaceTerrace!: number;
  category!: string;
  residenceId!: number;

}
