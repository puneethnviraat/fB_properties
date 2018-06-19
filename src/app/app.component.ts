 
   import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results_books:any = '';
  results_characters:any = '';
  results_houses:any = '';
  
  public books={};
  public characters={};
  public houses={};
  
  constructor(private http: HttpClient){
  }
  ngOnInit(): any {
    this.http.get('https://www.anapioficeandfire.com/api/books').subscribe(books => {
      console.log(books);
      this.results_books=books
    });
    this.http.get('https://www.anapioficeandfire.com/api/characters').subscribe(characters => {
      console.log(characters);
      this.results_characters=characters
    });
    this.http.get('https://www.anapioficeandfire.com/api/houses').subscribe(houses => {
      console.log(houses);
      this.results_houses=houses
    });
  }
}
