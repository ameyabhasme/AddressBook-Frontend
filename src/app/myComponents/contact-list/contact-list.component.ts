import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/contacts';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  public contacts: Contacts[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getContacts();
   }

  private getContacts() {
    this.api.get().subscribe(myData => {
        this.contacts = myData.data;
    },
      (error: any) => console.log(error)
    );
  }

  deleteContact(id: number) {
    this.api.delete(id).subscribe(myData => {
      console.log("Deleted: ", myData);
      this.getContacts();
    },
      (error: any) => console.log(error)
    )
  }
}
