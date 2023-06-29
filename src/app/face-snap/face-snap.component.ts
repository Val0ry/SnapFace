import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  buttonLike!: string;
  imageUrl!: string;

  ngOnInit() {
    this.title = "OceanGate";
    this.description = "Mon sous-marin préfére";
    this.createdDate = new Date();
    this.snaps = 189;
    this.buttonLike = "Like";
    this.imageUrl = "assets/submarine-168884_1280.jpg";
  }

  onLike() {
    if (this.buttonLike === "Like") {
      this.snaps++;
      this.buttonLike = "Dislike";
    } else {
      this.snaps--;
      this.buttonLike = "Like";
    }
  }

  /* DoubleClick() {
    const likeButton = document.querySelector('.like-button') as HTMLButtonElement;

    likeButton.classList.add('animate');

    setTimeout(() => {
      likeButton.classList.remove('animate');
    }, 1000);
    this.snaps++;
  } */
}