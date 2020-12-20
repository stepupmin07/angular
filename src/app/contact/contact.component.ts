import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContactDataService } from '../contact-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  results:any ;
  filterData = [
    {
      firstName: 'Celestine',
      lastName: 'Schimmel',
      address: '7687 Jadon Port'
    },
    {
      firstName: 'Johan',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports'
    },
    {
      firstName: 'Lizzie',
      lastName: 'Schumm',
      address: '5203 Jordon Center'
    },
    {
      firstName: 'Gavin',
      lastName: 'Leannon',
      address: '91057 Davion Club'
    },
    {
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor'
    }
  ]
  width: number = 200;
  number: number = 0;
  searchText = '';
  width3: number = 300;
  
  constructor(private http:HttpClient,private service: ContactDataService,) { }

  ngOnInit() {
    this.number.toFixed(1);
    this.service.queryData().then(res => {
      this.results = res;
    });


  }
  setTwoNumberDecimal($event) {
    $event.target.value = parseFloat($event.target.value).toFixed();
    if(/[^-]/.test($event.target.value)){
      $event.target.value = 1;
    }
    console.log($event.target.value)
  }


}
