import { Component, OnInit } from '@angular/core';
import {InterventionsService} from "../../Services/interventions.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  Interventiondata: any;
  rep: any;
  msg = '';
  message = '';
  modifData: any;
  Interventionid: any;
  constructor(private service: InterventionsService, private route: ActivatedRoute) {
    this.Interventionid = this.route.snapshot.paramMap.get('id');
    if (this.Interventionid != null && this.Interventionid != 0) {
      this.UpdateIntervention(this.Interventionid);
    }
    this.LoadIntervention();
  }
  ngOnInit(): void {
  }
  UpdateIntervention(code: any) {
    this.service.ChargerInterventionParCode(code).subscribe(result => {
      this.modifData = result;
      if (this.modifData != null) {
        this.Interventionform = new FormGroup({
          code: new FormControl(this.modifData.code),
          agent: new FormControl(this.modifData.agent),
          client: new FormControl(this.modifData.client),
          vehicule: new FormControl(this.modifData.vehicule),
          operation: new FormControl(this.modifData.operation),
        });
      }
    });
  }
  Interventionform = new FormGroup({
    code: new FormControl('', Validators.required),
    agent: new FormControl('', Validators.required),
    client: new FormControl('', Validators.required),
    vehicule: new FormControl('', Validators.required),
    operation: new FormControl('', Validators.required),
  });
  LoadIntervention() {
    this.service.ChargerIntervention().subscribe(result => {
      this.Interventiondata = result;
    });
  }
  SaveIntervention() {
    if (this.Interventionform.valid) {
      this.service.Enregistrer(this.Interventionform.value).subscribe(result => {
        this.rep = result;
        if (this.rep.result == 'pass') {
          this.message = "Ajouté avec succes"
          this.msg = 'sucess'
        } else {
          this.message = "Erreur"
          this.msg = 'error'
        }
      });
    } else {
      this.message = "Entrer des informations valides"
      this.msg = 'error'
    }
  }
  get agent() {
    return this.Interventionform.get('agent');
  }
  get operation() {
    return this.Interventionform.get('operation');
  }
  get client() {
    return this.Interventionform.get('client');
  }
  get vehicule() {
    return this.Interventionform.get('vehicule');
  }
}
