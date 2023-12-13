import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService:AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status:string) => alert('New Status: ' + status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.loggingService.logStatusChange(accountStatus)
    this.accountsService.addAccount(accountName, accountStatus)
  }
}
