import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';

@Component({
  selector: 'app-newsusa',
  templateUrl: './newsusa.component.html',
  styleUrls: ['./newsusa.component.css']
})
export class NewsusaComponent implements OnInit {

  newsus:any={};
  constructor(public _NewsService:NewsService) { 
    this._NewsService.getUsaNews().subscribe((data) =>{
     this.newsus=data.articles;
    //  console.log(this.newsus);
    });

  }
  ngOnInit(): void {
  }

}
