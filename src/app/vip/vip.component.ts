import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';


import { QuickNavService } from '../reuseables/services/quick-nav.service';

import { Header2Component } from "../components/header2/header2.component";
import { SpinnerComponent } from '../reuseables/http-loader/spinner.component';
import { CurrencyConverterPipe } from '../reuseables/pipes/currency-converter.pipe';

@Component({
  selector: 'app-vip',
  imports: [
    CommonModule,
    Header2Component, SpinnerComponent,
    CurrencyConverterPipe
  ],
  templateUrl: './vip.component.html',
  styleUrl: './vip.component.css'
})

export class VipComponent  {

    constructor(
      public quickNav: QuickNavService
    ){}

  // 🔢 total VIP levels
  vipLevels = Array.from({ length: 15 }); // VIP0 - VIP7

  currentDeposit:any = 0;
  requiredDeposit:any = 0;

  currentWager:any = 0;
  requiredWager:any= 0

  ngOnInit(): void {
    // this.loadVipData();

    if (!this.quickNav.storeData.get("vip_system")) {
      this.quickNav.reqServerData.get('dashboard').subscribe((res)=>{
        console.log({res});

        const vip_system = res.main.vip_system
        this.currentDeposit=res.main.wallet.balance.new
        this.requiredDeposit= parseFloat(vip_system.next.deposit_range.split("-")[0].replaceAll("$", ''))

        this.currentWager = vip_system.bet_amount
        this.requiredWager = parseFloat(vip_system.next.bet_amount.replaceAll("$",""))

        // console.log({requiredWager:vip_system.next.bet_amount.replaceAll("$","")});

    })}

  }

  getCurveHeight(i: number): number {
    const total = this.vipLevels.length - 1;
    const x = i / total;

    // parabola curve (arc)
    return 40 * Math.sin(Math.PI * x);
  }

  // progress %
  get depositProgress() {
    if (!this.requiredDeposit) return 0;

    // console.log("requiredDeposit>", this.requiredDeposit);
    //
    // console.log({currentDeposit:this.currentDeposit});

    return Math.min((this.currentDeposit / this.requiredDeposit) * 100, 100);
  }

  get wagerProgress() {

    // console.log({requiredWager:this.requiredWager, currentWager:this.currentWager});

    if (!this.requiredWager) return 0;
    return Math.min((this.currentWager / this.requiredWager) * 100, 100);
}

  // // 🚀 simulate API load
  // loadVipData() {
  //   // replace this with API later
  //   this.currentVip = 1;
  //
  //   this.stats = {
  //     deposit: 100,
  //     wager: 300
  //   };
  // }
  //
  // // 📈 progress %
  // getProgress(current: number, required: number): number {
  //   if (!required) return 0;
  //   return Math.min((current / required) * 100, 100);
  // }
  //
  // // 🎯 next level
  // get nextVip(): number {
  //   return this.currentVip + 1;
  // }

}
