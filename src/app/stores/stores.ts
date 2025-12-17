import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stores',
  imports: [FormsModule,CommonModule],
  templateUrl: './stores.html',
  styleUrl: './stores.css',
})
export class Stores {
  
  searchText = '';

  stores = [
    {
      name: 'Store 1',
      city: 'Chennai',
      state: 'Tamil Nadu',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active'
    },
    {
      name: 'Store 2',
      city: 'Hyderabad',
      state: 'Andhra Pradesh',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active'
    },
    {
      name: 'Store 3',
      city: 'Bengaluru',
      state: 'Karnataka',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active'
    }
  ];

  filteredStores() {
    return this.stores.filter(store =>
      store.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      store.city.toLowerCase().includes(this.searchText.toLowerCase()) ||
      store.manager.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}


