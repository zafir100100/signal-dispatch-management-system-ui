import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransitSlipService } from 'src/app/services/transit-slip/transit-slip.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transit-slip',
  templateUrl: './transit-slip.component.html',
  styleUrls: ['./transit-slip.component.sass']
})
export class TransitSlipComponent implements OnInit {
  form: FormGroup;
  user = JSON.parse(localStorage.getItem('currentUser'));
  constructor(private formBuilder: FormBuilder, private transitSlipService: TransitSlipService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      transit_slip_no: [null, [Validators.required]],
      transit_from: [null],
      transit_to: [null],
      transit_method: [null],
      name_of_courier: [null],
      transit_date: [null]
    });
  }

}
