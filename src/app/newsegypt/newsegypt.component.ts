import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-newsegypt',
  templateUrl: './newsegypt.component.html',
  styleUrls: ['./newsegypt.component.css']
})
export class NewsegyptComponent implements OnInit {
  news:any={};
  constructor(public _NewsService:NewsService) { 
    this._NewsService.getEgyptNews().subscribe((data) =>{
     this.news=data.articles;
    //  console.log(this.news);
    });
  }

  ngOnInit(): void {
  }

}
