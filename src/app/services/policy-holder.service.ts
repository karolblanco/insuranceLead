import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyHolderService {

  private policyHolderSubject = new Subject<any>();

  policyHolderObservable = this.policyHolderSubject.asObservable();

  notifyPolicyHolderChange() {
    this.policyHolderSubject.next(null)
  }

}