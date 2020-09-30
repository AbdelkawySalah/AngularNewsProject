import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../news.service'
@Component({
  selector: 'app-turkey-news',
  templateUrl: './turkey-news.component.html',
  styleUrls: ['./turkey-news.component.css']
})
export class TurkeyNewsComponent implements OnInit {
  
  TrkNews:any={};
  constructor(public _NewsService:NewsService) {
    this._NewsService.getTurkyNews().subscribe((data) => {
     this.TrkNews=data.articles;
     console.log(this.TrkNews);
    });
   }

  ngOnInit(): void {
  }

}
