import {Component, OnInit} from '@angular/core';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'celuphone';
  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyD6X_lNUR_3yb9prSJ5Um4iwCGtpj29Xl4",
      authDomain: "celuphone-b12a9.firebaseapp.com",
      projectId: "celuphone-b12a9",
      storageBucket: "celuphone-b12a9.appspot.com",
      messagingSenderId: "69080185725",
      appId: "1:69080185725:web:503a834ea6dd9d1c1d6a14"
    };
    const app = initializeApp(firebaseConfig);
  }
}
