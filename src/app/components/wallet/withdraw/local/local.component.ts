import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletService } from '../../../../reuseables/services/wallet.service';
import { InvoiceComponent } from '../../invoice/invoice.component';
import { CreatePinComponent } from '../../create-pin/create-pin.component';
import { TruncateCenterPipe } from '../../../../reuseables/pipes/truncate-center.pipe';

@Component({
  selector: 'app-withdraw-local',
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    InvoiceComponent,CreatePinComponent,
    TruncateCenterPipe
  ],
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css', "../../wallet-styles.component.css"]
})
export class LocalComponent {

  walletService = inject(WalletService);
  transactionPin:any
  editing=false

  makeFlag(code:any){
    return `https://flagsapi.com/${code.slice(0,2)}/flat/64.png`
  }

  onBankChange(event: any) {

    const bankCode = event.target.value;

    console.log('Selected Bank Code:', bankCode);

  }
  

  // get locaBank(){
  //   return this.walletService.quickNav.storeData.get("local_banks")[0]
  // }

  // createPin(){
  //
  //   const data  = {
  //     processor:"create_pin",
  //     pin:this.transactionPin,
  //   }
  //
  //   this.walletService.reqServerData.post('wallet/', data).subscribe()
  // }
  // creeateDeposit(){
  //
  //   const data  = {
  //     'processor':'create_deposit',
  //     'amount':this.walletService.localAmount,
  //     'method':this.walletService.selectedData.code
  //   }
  //
  //   console.log("creating deposit>>", data);
  //
  //   this.walletService.reqServerData.post('wallet/', data).subscribe((res)=>{
  //     console.log({res});
  //
  //   })
  //
  // }

  banks = [
    { name: 'Access Bank', code: '044' },
    { name: 'Citibank Nigeria', code: '023' },
    { name: 'Ecobank Nigeria', code: '050' },
    { name: 'Fidelity Bank', code: '070' },
    { name: 'First Bank of Nigeria', code: '011' },
    { name: 'First City Monument Bank (FCMB)', code: '214' },
    { name: 'Globus Bank', code: '00103' },
    { name: 'Guaranty Trust Bank (GTBank)', code: '058' },
    { name: 'Heritage Bank', code: '030' },
    { name: 'Jaiz Bank', code: '301' },
    { name: 'Keystone Bank', code: '082' },
    { name: 'Kuda Bank', code: '50211' },
    { name: 'Moniepoint MFB', code: '50515' },
    { name: 'Opay', code: '999992' },
    { name: 'PalmPay', code: '999991' },
    { name: 'Parallex Bank', code: '526' },
    { name: 'Polaris Bank', code: '076' },
    { name: 'Providus Bank', code: '101' },
    { name: 'Stanbic IBTC Bank', code: '221' },
    { name: 'Standard Chartered Bank', code: '068' },
    { name: 'Sterling Bank', code: '232' },
    { name: 'Suntrust Bank', code: '100' },
    { name: 'Titan Trust Bank', code: '102' },
    { name: 'Union Bank', code: '032' },
    { name: 'United Bank for Africa (UBA)', code: '033' },
    { name: 'Unity Bank', code: '215' },
    { name: 'Wema Bank', code: '035' },
    { name: 'Zenith Bank', code: '057' }
  ];

}
