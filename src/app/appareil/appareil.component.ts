import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

 // appareilName: string ;
 @Input() appareilName: string;
 @Input() appareilStatus: string;
 @Input() idx: number;
 @Input() id: number;
  constructor() { 
    console.log('name appareil',this.appareilName)
  }

  ngOnInit() {
    console.log('index',this.idx)
  }

  getStatus() {
    return( 
      this.appareilStatus
      )
  }

  getState=()=>{
    console.log(this.appareilName)
    return this.appareilName
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
}
 


}
