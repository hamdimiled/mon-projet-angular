import { Component, OnInit,Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

    // integre service AppareilService dans AppComponent
    constructor(private appareilService: AppareilService) {
      const a=this.appareilService
      console.log("a")
    }

    isAuth = false;
    appareils :any[]
  
    appareilOne = 'Machine à laver';
    appareilTwo = 'Frigo';
    appareilThree = 'Ordinateur';
    //lastUpdate = new Date();
  
    lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    });
    
    allumer(n) {
      console.log('n2')
      this.appareilService.switchOn(n);
  }
  
    onAllumer() {
      this.appareilService.switchOnAll();
  }
  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
  ngOnInit() {
    this.appareils=this.appareilService.appareils
    console.log('appareils',this.appareils)
  
  }
  

}
