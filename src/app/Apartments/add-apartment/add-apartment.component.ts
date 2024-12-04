import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
 
  AddApartment: FormGroup;
  newApart: any;

  constructor(private fb: FormBuilder) {
    this.AddApartment = this.fb.group({
      apartNum: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      FloorNum: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      surface: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
      terrace: ['', Validators.required],
      surfaceterrace: [''],
      category: ['', Validators.required],
      residence: ['', Validators.required]
    });

    // Activer ou désactiver la validation pour 'surfaceterrace' dynamiquement
    this.AddApartment.get('terrace')?.valueChanges.subscribe((value) => {
      const surfaceTerraceControl = this.AddApartment.get('surfaceterrace');
      if (value === 'yes') {
        surfaceTerraceControl?.setValidators([Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]);
      } else {
        surfaceTerraceControl?.clearValidators();
      }
      surfaceTerraceControl?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.AddApartment.valid) {
      this.newApart = this.AddApartment.value;
      console.log('New Apartment Data:', this.newApart);
    } else {
      console.log('Form is invalid!');
    }
  }
}
