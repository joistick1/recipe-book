import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {

  	firebase.initializeApp({
  		apiKey: "AIzaSyCTEtFIFv3JrVHBAnUWj83tB44psn12TXY",
    	authDomain: "ng-recepie-book-a74e0.firebaseapp.com"
  	})

  }
}
