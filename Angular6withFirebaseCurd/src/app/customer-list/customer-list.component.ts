import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  custmerArray = [];
  showDeletedMessage: boolean;
  constructor(private custService: CustomerService) { }
  searchText = '';
  ngOnInit() {
    this.custService.getCustomers().subscribe( list => {
      this.custmerArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }
  onDelete($key) {
      if (confirm('Are you sure to delete this record')) {
        this.custService.deleteCustomer($key);
        this.showDeletedMessage = true;
        setTimeout(() => (this.showDeletedMessage = false), 3000);
      }
  }

  filterCondition(customer) {
    return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }
}
