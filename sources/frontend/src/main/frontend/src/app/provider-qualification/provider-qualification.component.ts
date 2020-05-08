import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Purchaser} from '../../model/purchaser.model';
import {Address} from '../../model/address.model';
import {PurchaserService} from '../service/purchaser.service';
import {CodeAPEService} from '../service/code-ape.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {CompanyType, Provider} from "../../model/provider.model";
//import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { $$ } from 'protractor';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import {Qualification} from "../../model/qualification.model";
import {ProviderService} from "../service/provider.service";
import {HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-purchaser-form',
  templateUrl: './provider-qualification.component.html',
  styleUrls: ['./provider-qualification.component.css'],
})

export class ProviderQualificationComponent implements OnInit {

  provider;

  qualification: Qualification = new Qualification();
  listCodeApe: any;

  registrationSuccessful: boolean = false;
  registrationError: boolean = false;
  error: string;
  loading: boolean;
  config : PerfectScrollbarConfigInterface = {};
  qualificationForm: FormGroup;



  constructor(private providerService:ProviderService, private fb: FormBuilder, public dialogRef: MatDialogRef<ProviderQualificationComponent>,private toastrService: ToastrService) { }

  ngOnInit() {
    this.loading = false;


    this.providerService.getQualification(this.provider.id).subscribe(
      event => {
        if (event.type === HttpEventType.Response) {
          let data:any = event.body;

          if (data.status === "OK") {
            this.qualification = JSON.parse(data.message);
          }
        }
      });


    this.qualificationForm = this.fb.group({
      ca1: ['', [Validators.required, Validators.pattern("[0-9]+")]],
      ca2: ['', [Validators.pattern("[0-9]+")]],
      ca3: ['', [Validators.pattern("[0-9]+")]],
      ebe1:  ['', [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(1), Validators.maxLength(14)]],
      ebe2: ['', [Validators.pattern("[0-9]+")]],
      ebe3: ['', [Validators.pattern("[0-9]+")]]
    });

    if (this.qualification.id) {

      this.qualificationForm.setValue({
        ca1: this.qualification.ca1,
        ca2: this.qualification.ca2,
        ca3: this.qualification.ca3,
        ebe1: this.qualification.ebe1,
        ebe2: this.qualification.ebe2,
        ebe3: this.qualification.ebe3
      });
    }

  }

  onSubmit({value, valid}: {value: Qualification, valid: boolean}) {

    console.log(value);
    // @ts-ignore
    if (value.ca2 == "") {
      value.ca2=-1;
    }
    // @ts-ignore
    if (value.ca3 == "") {
      value.ca3=-1;
    }
    // @ts-ignore
    if (value.ebe2 == "") {
      value.ebe2=-1;
    }
    // @ts-ignore
    if (value.ebe3 == "") {
      value.ebe3=-1;
    }
    this.error = "";
    this.registrationError = false;
    this.registrationSuccessful = false;
    this.loading = true;
    console.log("avant submit");

    if (this.qualification.id == null) {

      this.providerService.addQualification(value, this.provider.id)
        .subscribe(res => {
          this.loading = false;
          console.log("Service data:");
          console.log(res);
          let data: any = res;
          if (data.status === "OK") {
            this.registrationSuccessful = true;
            this.showToastSuccessMessage("Le fournisseur a bien été qualifié", "Ajout qualification");
            // this.scrollToSuccessMessage();
            this.qualificationForm.reset();
          } else {
            this.error = data.message;
            this.registrationError = true
            // this.scrollToErrorMessage();
            this.showToastErrorMessage("Erreur lors de la qualification du fournisseur : " + this.error, "Ajout qualification");
          }
          console.log("Data:");
          console.log(data);
        }, err => {
          this.loading = false;
          this.error = err;
          this.registrationError = true;
          this.registrationSuccessful = false;
          // this.scrollToErrorMessage();
          this.showToastErrorMessage("Erreur lors de la qualification du fournisseur: " + this.error, "Ajout qualification");
        });
    } else {
      console.log("modifying:");

      this.providerService.addQualification(value, this.provider.id)
      .subscribe(res => {
        this.loading = false;
        console.log("purchaserService data edited:");
        console.log(res);
        let data:any = res;
        if (data.status === "OK") {
          this.registrationSuccessful = true;
          // this.scrollToSuccessMessage();
          this.showToastSuccessMessage("La qualification a été modifié avec succès","Modification qualification");

        } else {
          this.error = data.message;
          this.registrationError = true
          // this.scrollToErrorMessage();
          this.showToastErrorMessage("Erreur lors de la modification de la qualification : ","Modification qualification");

        }
        console.log("Data:");
        console.log(data);
      }, err => {
        this.loading = false;
        this.error = err;
        this.registrationError = true;
        this.registrationSuccessful = false;
        this.showToastErrorMessage("Erreur lors de la modification de la qualification : ","Modification qualification");

      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  showToastErrorMessage(message, title) {
    this.toastrService.error(message, title, {
      timeOut: 3000,
    });
    window.scroll(0,0);
  }

  showToastSuccessMessage(message, title) {
    console.log("hear");
    this.toastrService.success(message, title, {
      timeOut: 3000,
    });
    window.scroll(0,0);
  }


}

