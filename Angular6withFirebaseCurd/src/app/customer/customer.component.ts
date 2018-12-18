import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../shared/customer.service";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  constructor(private custServive: CustomerService) {}
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.custServive.form.controls;
  ngOnInit() {}
  onSubmit() {
    this.submitted = true;

    if (this.custServive.form.valid) {
      if (this.custServive.form.get('$key').value == null) {
        this.custServive.insertCustomer(this.custServive.form.value);
        this.showSuccessMessage = true;
      } else {
        this.custServive.updateCustomer(this.custServive.form.value);
      }
        this.showSuccessMessage = true;
        setTimeout(() => (this.showSuccessMessage = false), 3000);
        this.submitted = false;
        this.custServive.form.reset();
      }
    }
  }

