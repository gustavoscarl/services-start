import { Component, inject } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private accountsService?: AccountsService

  accounts: {name: string, status: string}[] = [];

  constructor( ){
    this.accountsService = inject(AccountsService)
  }
  ngOnInit(){
    this.accounts= this.accountsService.accounts;
  }
}
