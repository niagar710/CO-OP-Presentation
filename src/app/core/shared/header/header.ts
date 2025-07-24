import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faHome, faUser, faFolderOpen, faTools, faCommentDots} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  faHome = faHome;
  faUser = faUser;
  faFolderOpen = faFolderOpen;
  faTools = faTools;
  faCommentDots = faCommentDots;

}
