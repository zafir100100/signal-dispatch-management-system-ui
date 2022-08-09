import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DespatchEnvelopService } from 'src/app/services/despatch-envelop/despatch-envelop.service';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-envelop-details',
  templateUrl: './envelop-details.component.html',
  styleUrls: ['./envelop-details.component.sass']
})
export class EnvelopDetailsComponent implements OnInit {

  id: number = null;
  envelop: any = null;
  form: FormGroup;
  registration_clerks: any[] = [];
  user = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private formBuilder: FormBuilder,
    private despatchEnvelopService: DespatchEnvelopService,
    private userInfoService: UserInfoService,
    private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getAllRegistrationClerks();
    this.form = this.formBuilder.group({
      id: [null],
      letter_no: [null],
      date_time_group: [null],
      originator_no: [null],
      from_address: [null],
      to_address: [null],
      precedance: [null],
      security_classification: [null],
      time_of_receive: [null],
      despatch_status: [null],
      time_of_delivery: [null],
      created_by: [null],
      status: [null],
      isSendTicked: [false],
      despatch_envelop_id: [null],
      sent_from: [null],
      sent_to: [null],
    });
    this._route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getEnvelopById();
        }
      }
    );
  }

  getAllRegistrationClerks() {
    let requestBody = {
      user_role: 'registration_clerk'
    }
    this.userInfoService.getByRole(requestBody).subscribe(
      (t) => {
        this.registration_clerks = t?.payload?.output;
      },
      (f) => {
        Swal.fire({ icon: 'error', title: 'Oops...', text: f ?? 'Something went wrong. Please try again later.' });
      }
    );
  }

  getEnvelopById() {
    let requestBody = {
      id: this.id
    }
    this.despatchEnvelopService.getById(requestBody).subscribe(
      (t) => {
        this.envelop = t?.payload?.output ?? null;
        this.form.patchValue(this.envelop);
      },
      (f) => {
        Swal.fire({ icon: 'error', title: 'Oops...', text: f ?? 'Something went wrong. Please try again later.' });
      }
    );
  }

  onSend() {
    if (this.form.valid) {
      this.form.patchValue({ despatch_envelop_id: this.form.get('id')?.value });
      if (this.form.get('isSendTicked')?.value == true && this.form.get('sent_to')?.value != null && this.form.get('despatch_envelop_id')?.value != null) {
        this.form.patchValue({ sent_from: Number(this.user?.id) });
        this.despatchEnvelopService.createDespatchEnvelopDistribution(this.form.value).subscribe(
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
}
