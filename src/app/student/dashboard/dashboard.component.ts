import { Component, OnInit, ViewChild } from '@angular/core';
import { DespatchEnvelopService } from 'src/app/services/despatch-envelop/despatch-envelop.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  envelops: any[] = [];
  user = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private despatchEnvelopService: DespatchEnvelopService) { }


  ngOnInit() {
    this.getAllEnvelops();
  }

  getAllEnvelops() {
    let requestBody = {
      sent_to: this.user?.id,
    }
    this.despatchEnvelopService.getByCreatedFor(requestBody).subscribe(
      (t) => {
        this.envelops = t?.payload?.output ?? [];
      },
      (f) => {
        Swal.fire({ icon: 'error', title: 'Oops...', text: f ?? 'Something went wrong. Please try again later.' });
      }
    );
  }

}
