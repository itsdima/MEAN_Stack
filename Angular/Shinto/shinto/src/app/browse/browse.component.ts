import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['../app.component.css']
})
export class BrowseComponent implements OnInit {
  Alltr; 
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
    var data = this._shinto.browse();
    this.Alltr = data; 
  }

}
