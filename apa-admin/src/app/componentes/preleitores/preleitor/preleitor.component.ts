import { PreleitorService } from './../shared/preleitor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-preleitor',
  templateUrl: './preleitor.component.html',
  styleUrls: ['./preleitor.component.scss']
})
export class PreleitorComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  constructor(private preleitor_service:PreleitorService,private _formBuilder: FormBuilder) { 
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  salvarPreleitor(){

  }

}
