import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransitSlipService } from 'src/app/services/transit-slip/transit-slip.service';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transit-slip-details',
  templateUrl: './transit-slip-details.component.html',
  styleUrls: ['./transit-slip-details.component.sass']
})
export class TransitSlipDetailsComponent implements OnInit {
  id: number = null;
  form: FormGroup;
  user = JSON.parse(localStorage.getItem('currentUser'));
  users: any[] = [];

  constructor(private formBuilder: FormBuilder,
    private transitSlipService: TransitSlipService,
    private userInfoService: UserInfoService,
    private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getAllUser();
    this.form = this.formBuilder.group({
      id: [null],
      transit_slip_no: [null, [Validators.required]],
      transit_from: [{ value: this.user?.id, disabled: true }, Validators.required],
      transit_to: [{ value: null, disabled: true }, Validators.required],// [this.user?.id],
      transit_method: [null],
      name_of_courier: [null],
      transit_date: [null],
      created_by: [this.user?.id],
      created_for: [this.user?.id],
    });
    this._route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getTsById();
        }
      }
    );
  }

  getAllUser() {
    this.userInfoService.getAll().subscribe(
      (res: any) => {
        this.users = res?.payload?.output ?? [];
      },
      (err: any) => {
        Swal.fire({ icon: 'error', title: 'Oops...', text: err ?? 'Something went wrong. Please try again later.' });
      }
    );
  }

  getTsById() {
    let requestBody = {
      id: this.id
    };
    this.transitSlipService.getById(requestBody).subscribe(
      (res: any) => {
        // this.users = res?.payload?.output ?? [];
        this.form.patchValue(res?.payload?.output ?? null);
      },
      (err: any) => {
        Swal.fire({ icon: 'error', title: 'Oops...', text: err ?? 'Something went wrong. Please try again later.' });
      }
    );
  }
}
