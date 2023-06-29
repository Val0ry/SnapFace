import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snaps.models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      "OceanGate",
      "Mon sous-marin préfére",
      new Date(),
      189,
      "Like"
      )
  }
}
