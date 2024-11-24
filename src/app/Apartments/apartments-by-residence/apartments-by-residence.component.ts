import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent {

  residenceId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.residenceId = +this.route.snapshot.paramMap.get('residenceId')!;
    // Logique pour charger les appartements associés à cette résidence
  }
}
