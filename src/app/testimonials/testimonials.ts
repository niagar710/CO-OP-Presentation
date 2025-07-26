import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class Testimonials {
  reflectionCards = [
    {
      title: 'First Impressions',
      quote: 'You don’t walk into the room. You own it.',
      reflection: 'Starting at INPO, I was both excited and nervous. I quickly learned that curiosity and asking questions were my greatest tools. I’ve learned that thse are some of my greatest assests and I will forever continue to utilize them.',
      isFinal: false
    },
    {
      title: 'Learning Angular',
      quote: 'Power is in the details.',
      reflection: 'Diving into Angular was a challenge, but building my first angular project made me feel like as though I could really go a long ways in development. I learned how to break problems down and build solutions piece by piece.',
      isFinal: false
    },
    {
      title: 'Meetings',
      quote: 'You don’t just present. You command attention.',
      reflection: 'From CAB Meetings to Sprint Demos, I’ve been taught how to communicate technical work clearly. I learned to tailor my message to different audiences and gained confidence in my voice as a developer.',
      isFinal: false
    },
    {
      title: 'Mentorship Moments',
      quote: 'Real growth happens when someone dares to challenge you.',
      reflection: 'My mentors at INPO have been some of my biggest advocates for continuing development work. They didn’t just guide me through my journey, I was challenged. Their feedback helped me see blind spots and encouraged me to think critically and creatively. There were definitely times when I thought I wasn’t cut out for the career I was pursuing but that just encouraged me to go harder, learn, and leverage my mentors.',
      isFinal: false
    },
    {
      title: 'Team Collaboration',
      quote: 'No one wins alone. The best victories are shared.',
      reflection: 'Working with the Proton Team showed me the power of collaboration. Whether pair programming or debugging problems to find solutions, I learned how to give and receive constructive feedback.',
      isFinal: false
    },
    {
      title: 'How do you want to be remembered?',
      quote: 'As the one who didn’t just show up—she changed the game.',
      reflection: 'I want to be remembered as someone who brought energy and empathy to every challenge. Someone who made others feel heard, who never stopped learning, and who left things better than she found them. I want to be a fixer, the person who wears the "White Hat" in the developing aspect, a gladiator.',
      isFinal: true
    }
  ];
}
