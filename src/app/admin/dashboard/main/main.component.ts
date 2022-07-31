import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfoService } from 'src/app/services/user-info/user-info.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userInfoService: UserInfoService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      user_name: [null],
      user_email: [null, [Validators.required, Validators.email, Validators.minLength(5)],],
      user_role: ['Clerk', [Validators.required, Validators.minLength(5)],],
      user_password: [null, [Validators.required, Validators.minLength(5)],],
    });
  }

  onSubmit(){
    if(this.form.valid){
      this.form.patchValue({ user_name: this.form.get('user_email')?.value });
      this.userInfoService.create(this.form.value).subscribe(
        (t) => {
          Swal.fire({ icon: 'success', title: 'Success!', text: t?.message ?? 'Operation Successful.' });
        },
        (f) => {
          Swal.fire({ icon: 'error', title: 'Oops...', text: f?.error?.message ?? 'Something went wrong. Please try again later.' });
        }
      );
    }
  }
}
