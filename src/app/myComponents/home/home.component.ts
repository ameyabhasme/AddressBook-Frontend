import { Component, OnInit } from '@angular/core';
import { Contacts } from './../../contacts';
import { ApiService } from './../../services/api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
}
