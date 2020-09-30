import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  ID=null;
  newsdet:any={};
  constructor(public _NewsService:NewsService,public _ActivatedRoute:ActivatedRoute) { 
   this.ID=this._ActivatedRoute.snapshot.paramMap.get("id");
  //  alert(this.ID);
  this._NewsService.getEgyptNews().subscribe((data) =>{
    this.newsdet=data.articles[this.ID];
  });

  }

  ngOnInit(): void {
  }

}
