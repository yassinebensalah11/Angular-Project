import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  id!: number;
  constructor(private ar: ActivatedRoute) {}

  ngOnInit() {
    //this.id = this.ar.snapshot.params['id'];
    //console.log(this.id);
    this.ar.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    }
   }