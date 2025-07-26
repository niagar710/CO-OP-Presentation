import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trivia } from '../core/services/trivia';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-skills-tools',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './skills-tools.html',
  styleUrl: './skills-tools.css'
})
export class SkillsTools {
  numQuestionsOptions = [5, 10, 15, 20];
  categoryOptions = [
    { id: 9, name: 'General Knowledge' },
    { id: 18, name: 'Science: Computers' },
    { id: 23, name: 'History' },
    { id: 21, name: 'Sports' }
  ];
  difficultyOptions = ['easy', 'medium', 'hard'];

  numQuestions = this.numQuestionsOptions[0];
  selectedCategory = this.categoryOptions[0].id;
  selectedDifficulty = this.difficultyOptions[1];

  questions: any[] = [];

  constructor(private trivia: Trivia) {}

  startQuiz(): void {
    this.trivia.getQuestions(this.numQuestions, this.selectedCategory, this.selectedDifficulty)
      .subscribe(data => {
        this.questions = data.results.map((q: any) => ({
          ...q,
          allAnswers: this.shuffleAnswers([q.correct_answer, ...q.incorrect_answers]),
          selectedAnswer: null,
          isAnswered: false
        }));
      });
  }

  shuffleAnswers(answers: string[]): string[] {
    return answers.sort(() => Math.random() - 0.5);
  }

  selectAnswer(question: any, answer: string): void {
    question.selectedAnswer = answer;
    question.isAnswered = true;
  }

  isCorrect(question: any, answer: string): boolean {
    return answer === question.correct_answer;
  }

  
  resetQuiz(): void {
    this.questions = [];
  }
}
