import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransitSlipService } from 'src/app/services/transit-slip/transit-slip.service';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transit-slip',
  templateUrl: './transit-slip.component.html',
  styleUrls: ['./transit-slip.component.sass']
})
export class TransitSlipComponent implements OnInit {
  form: FormGroup;
  user = JSON.parse(localStorage.getItem('currentUser'));
  users: any[] = [];
  constructor(private formBuilder: FormBuilder, private transitSlipService: TransitSlipService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      transitSlip: this.formBuilder.group({
        id: [null],
        transit_slip_no: [null],
        transit_from: [null],
        transit_to: [null],
        transit_method: [null],
        name_of_courier: [null],
        created_by: [null],
        created_at: [null],
        updated_by: [null],
        updated_at: [null],
      }),
      transitSlipEnvelop: [null]
    });
    // this.getAllUser();
  }

  // getAllUser() {
  //   this.userInfoService.getAll().subscribe(
  //     (res: any) => {
  //       this.users = res?.payload?.output ?? [];
  //     },
  //     (err: any) => {
  //       Swal.fire({ icon: 'error', title: 'Oops...', text: err ?? 'Something went wrong. Please try again later.' });
  //     }
  //   );
  // }

  onSubmit() {
    if (this.form.valid) {
      let g = this.form.getRawValue();
      g.transit_to = g.transit_from;
      g.created_by = g.transit_from;
      g.created_for = g.transit_from;
      this.form.patchValue({ transit_to: this.form.get('transit_from')?.value });
      this.form.patchValue({ created_by: this.form.get('transit_from')?.value });
      this.form.patchValue({ created_for: this.form.get('transit_to')?.value });
      this.transitSlipService.create(this.form.getRawValue()).subscribe(
        (t) => {
          Swal.fire({ icon: 'success', title: 'Success!', text: t?.message ?? 'Operation Successful.' });
        },
        (f) => {
          Swal.fire({ icon: 'error', title: 'Oops...', text: f ?? 'Something went wrong. Please try again later.' });
        }
      );
    }
  }

  onSend() {
    if (this.form.valid) {
      let g = this.form.getRawValue();
      g.created_by = g.transit_from;
      g.created_for = g.transit_to;
      
      this.form.patchValue({ created_by: this.form.get('transit_from')?.value });
      this.form.patchValue({ created_for: this.form.get('transit_to')?.value });
      this.transitSlipService.create(this.form.getRawValue()).subscribe(
        (t) => {
          Swal.fire({ icon: 'success', title: 'Success!', text: t?.message ?? 'Operation Successful.' });
        },
        (f) => {
          Swal.fire({ icon: 'error', title: 'Oops...', text: f ?? 'Something went wrong. Please try again later.' });
        }
      );
    }
  }
}
