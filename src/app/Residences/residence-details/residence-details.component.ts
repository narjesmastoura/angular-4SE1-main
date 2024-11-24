import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
 

  currentId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentId = +params['id'];
    });
  }

  goToNext(): void {
    const nextId = this.currentId + 1; // Logic for the next residence ID
    this.router.navigate(['/residences', nextId]);
  }

}
