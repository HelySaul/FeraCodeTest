import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [],
  exports: []
})
export class CarouselModule {
}