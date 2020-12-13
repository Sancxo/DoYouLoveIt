import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      userName: "Simon",
      messageDate: new Date(),
      comment: "Quelle daube ce site !",
      numberOfLove: 0,
      numberOfDontLove: 0,
    },
    {
      userName: "Gérald",
      messageDate: new Date(),
      comment: "Hey lol, World !",
      numberOfLove: 0,
      numberOfDontLove: 0
    },
    {
    userName: "Gérard",
    messageDate: new Date(),
    comment: "Coucou les gens !",
    numberOfLove: 0,
    numberOfDontLove: 0,
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
