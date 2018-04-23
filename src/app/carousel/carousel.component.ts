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
      }),{params: {left: '0px'}}),
      state('move2',   style({
        left: '{{left}}'
      }),{params: {left: '0px'}} ),
      transition('* => *', animate(700))
    ])
  ]
})
export class CarouselComponent implements OnInit {

  currentPage = 1;
  pages = 2;
  slider = 'move1';
  diapersJson: Diaper[];
  pxValue = "";
  interval : any;
  @ViewChild('ul') ul: ElementRef;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getJSON().subscribe(data => {
      this.diapersJson = data.products.diapers;
      this.diapersJson.forEach((el, index) => {
        if(index<4){
         this.diapersJson.push(this.diapersJson[index]);
        }
      })
      this.transition();

    }, error => console.log(error));
  }

  transition() {
    this.interval = setInterval(()=> {

      this.currentPage++;
      if(this.currentPage === this.pages + 1){
        this.pxValue = -(this.currentPage -1) * 800 + "px";
        this.slide();
        this.currentPage = 1;
        setTimeout(() => {
          this.pxValue = "0px";
        }, 700);
      }else {
        this.pxValue = -(this.currentPage -1) * 800 + "px";
        this.slide();
      }
    }, 2000);
  }

  onHover() {
    clearInterval(this.interval);
  }

  onHoverOut() {
    this.transition();
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
