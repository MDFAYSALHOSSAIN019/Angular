// import { Component,OnInit,OnDestroy } from '@angular/core';
// import { MediaObserver, MediaChange } from '@angular/flex-layout/public-api';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit, OnDestroy {
//   title = 'simpleProject';
//   mediaSub:Subscription;
//   constructor(public mediaObserver:MediaObserver ){}
//   ngOnInit() {
//     this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
//       console.log(result.mqAlias);
//     })
//   }
//   ngOnDestroy(){
//     this.mediaSub.unsubscribe();
//   }
// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout/public-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'simpleProject';

 mediaSub : Subscription;
 diviceXs : boolean;

  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit() {
     this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.diviceXs=result.mqAlias==='xs' ? true : false;
    });
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
