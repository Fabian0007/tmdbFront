import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movietrailer',
  templateUrl: './movietrailer.component.html',
  styleUrls: ['./movietrailer.component.css'],
})
export class MovietrailerComponent implements OnInit, OnChanges {
  @Input() key: string;
  @Input() title: string;
  @Input() overview: string;
  active:boolean=false;
  url: SafeResourceUrl;
  sanitizer:any;
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer=sanitizer;
  }

  ngOnInit() {
  }
  
  ngOnChanges(changes){
    this.active=false;
  }
  
  getUrlVideo(): string {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}/?rel=0&modestbranding=1&autohide=1&showinfo=0`);
  }
  
  changeState() {
    this.active=!this.active;
  }

}
