import {Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import {AppService} from "../services/app.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

export class Diaper {
  name: string;
  id: number;
  size: string;
  path: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slide', [
      state('move1', style({
        left: '{{left}}'
      }),{params: {left: '0'}}),
      state('move2',   style({
        left: '{{left}}'
      }),{params: {left: '0'}} ),
      transition('inactive <=> active', animate('100ms ease-in'))
    ])
  ]
})
export class CarouselComponent implements OnInit {

  currentPage = 1;
  pages = 2;
  slider = 'move1'
  diapersJson: Diaper[];
  pxValue = 0;
  @ViewChild('ul') ul: ElementRef;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getJSON().subscribe(data => {
      this.diapersJson = data.products.diapers;

      setInterval(()=> {

        if(this.currentPage = this.pages){
          this.currentPage = 1;
          console.log(this.ul);
          this.ul.nativeElement.style.left=0;
        }else {
          this.currentPage++;
          this.pxValue = -(this.currentPage -1) * 800;
        }

        console.log(this.slider);
      }, 2000);

    }, error => console.log(error));

  }

  slide(){
    if(this.slider === "move1") {
      this.slider = "move2";
    } else if (this.slider === "move2"){
      this.slider = "move1";
    }
  }

}

@NgModule({
  imports: [],
  exports: []
})
export class CarouselModule {
}
