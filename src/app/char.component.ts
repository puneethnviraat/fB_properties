 
   import { Component, OnInit } from '@angular/core';
   import { HttpClient } from '@angular/common/http';
   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
   export class AppComponent implements OnInit {
     title = 'app';
     characters:any = '';
     public data={};
     constructor(private http: HttpClient){
     }
     ngOnInit(): void {
       this.http.get('https://www.anapioficeandfire.com/api/characters').subscribe(data => {
         console.log(data);
         this.characters=data
       });
     }
   }
   