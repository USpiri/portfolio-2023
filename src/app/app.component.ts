import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'portfolio';
  icon = 'lock';
  scrollPosition: number = 0;
  windowHeight: number = 0;
  documentHeight: number = 0;

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
    this.onWindowScroll();
  }

  onWindowScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    this.documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  scrollToBottom() {
    window.scroll({ top: document.documentElement.scrollHeight, left: 100, behavior: 'smooth' });
  }
  
}
