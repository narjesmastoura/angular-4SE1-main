import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  updateMode: boolean = false;
  residenceForm: FormGroup;


  constructor(private route: ActivatedRoute,private fb: FormBuilder) {
    this.residenceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))')]],
      status: ['Disponible', Validators.required],
      apartments: this.fb.array([]) // Apartments as a dynamic FormArray
    });
  }
   // Get apartments as FormArray
   get apartmentsArray(): FormArray {
    return this.residenceForm.get('apartments') as FormArray;
  }

  // Add new apartment to FormArray
  addApartment() {
    const apartmentForm = this.fb.group({
      apartNum: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      floorNum: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      surface: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]]
    });
    this.apartmentsArray.push(apartmentForm);
  }

  // Remove an apartment from FormArray
  removeApartment(index: number) {
    this.apartmentsArray.removeAt(index);
  }

  // Submit the form
  onSubmit() {
    if (this.residenceForm.valid) {
      const newResidence = this.residenceForm.value;
      console.log('New Residence:', newResidence);
    } else {
      console.log('Form is invalid!');
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.updateMode = params['updateMode'] === 'true';
    });
  }
}
