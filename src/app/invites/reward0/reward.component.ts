import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reward',
  imports: [CommonModule],
  templateUrl: './reward.component.html',
  styleUrl: './reward.component.css'
})
export class RewardComponent {



  levels = [
    {
      level: 1,
      required: 150,
      reward: 10
    },
    {
      level: 2,
      required: 500,
      reward: 25
    },
    {
      level: 3,
      required: 800,
      reward: 40
    },
    {
      level: 4,
      required: 1200,
      reward: 65
    },
    {
      level: 5,
      required: 2000,
      reward: 100
    },
    {
      level: 6,
      required: 3000,
      reward: 250
    },
    {
      level: 7,
      required: 5000,
      reward: 500
    }
  ];

  totalDeposit = 920;

  get currentReward() {
    const unlocked = this.levels.filter(
      x => this.totalDeposit >= x.required
    );

    return unlocked.length
      ? unlocked[unlocked.length - 1].reward
      : 0;
  }

  getProgress(required: number): number {
    const progress = (this.totalDeposit / required) * 100;
    return Math.min(progress, 100);
  }

}
