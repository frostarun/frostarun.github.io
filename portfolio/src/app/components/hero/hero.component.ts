import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  profile = this.svc.profile;

  displayed = '';
  private roles = [
    'Java Engineer',
    'Microservices Architect',
    'OAuth2 & SSO Specialist',
    'Cloud & DevOps Engineer',
    'Team Leader & Mentor'
  ];
  private ri = 0;
  private ci = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(private svc: PortfolioService) {}

  ngOnInit() { this.tick(); }

  ngOnDestroy() { if (this.timer) clearTimeout(this.timer); }

  private tick() {
    const r = this.roles[this.ri];
    if (!this.deleting) {
      this.displayed = r.slice(0, this.ci + 1);
      this.ci++;
      if (this.ci === r.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 2200);
        return;
      }
    } else {
      this.displayed = r.slice(0, this.ci - 1);
      this.ci--;
      if (this.ci === 0) {
        this.deleting = false;
        this.ri = (this.ri + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.tick(), this.deleting ? 52 : 82);
  }

  scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
