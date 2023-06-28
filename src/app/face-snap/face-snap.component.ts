import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(){
    this.title = "OceanGate";
    this.description = "Ami d'enfance";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = "https://cdn.pixabay.com/photo/2013/07/30/15/07/submarine-168884_1280.jpg";
  }
}