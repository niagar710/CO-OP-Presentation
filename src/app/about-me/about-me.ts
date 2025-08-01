import { Component, HostListener } from '@angular/core';
import { ProfileCard } from '../core/shared/profile-card/profile-card';
import { CoopProgram } from '../core/shared/coop-program/coop-program';
import { TChart } from '../core/shared/t-chart/t-chart';

@Component({
  selector: 'app-about-me',
  imports: [ProfileCard, CoopProgram, TChart],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 120) {
        current = section.getAttribute('id') || '';
      }
    });

    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');

        const parent = link.closest('.sidebar');
        if (parent) {
          const linkTop = link.getBoundingClientRect().top;
          const parentTop = parent.getBoundingClientRect().top;
          const offset = linkTop - parentTop - parent.clientHeight / 2;
          parent.scrollBy({ top: offset, behavior: 'smooth' });
        }
      }
    });
  }

  scrollTo(id: string, event: Event) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }  
}
