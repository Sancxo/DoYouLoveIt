import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() userName = "";
  @Input() date = new Date();
  @Input() comment = "";
  @Input() love = 0;
  @Input() dontLove = 0;

  onLove() {
    this.love ++;
    alert("We love you too !");
  }
  onDontLove() {
    this.dontLove ++;
    alert("We can't please to everybody ...");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
