import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userData: any;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.userData = data['user'];
    });
  }
}