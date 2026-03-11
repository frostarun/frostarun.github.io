import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent }     from './components/navbar/navbar.component';
import { HeroComponent }       from './components/hero/hero.component';
import { AboutComponent }      from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent }     from './components/skills/skills.component';
import { ContactComponent }    from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-skills></app-skills>
      <app-contact></app-contact>
    </main>
  `,
  styles: [`main { position: relative; }`]
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Scroll reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Language bar animation
    const langIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>('.lang-fill').forEach(bar => {
            const w = bar.getAttribute('data-w');
            if (w) bar.style.width = w + '%';
          });
          langIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    const langPanel = document.querySelector('.languages-panel');
    if (langPanel) langIO.observe(langPanel);
  }
}
