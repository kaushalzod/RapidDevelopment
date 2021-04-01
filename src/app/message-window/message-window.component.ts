import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-window',
  templateUrl: './message-window.component.html',
  styleUrls: ['./message-window.component.scss']
})
export class MessageWindowComponent implements OnInit {

  constructor() { }

  messageCard:boolean=false;

  chat=[
    {
      name:"Kaushal Zod",
      message:"You: Send me shared link..",
      img:"https://i.pravatar.cc/100"
    },
    {
      name:"Aditi Zod",
      message:"Kaushal: Hey, How are you..",
      img:"https://i.pravatar.cc/90"
    },
    {
      name:"Ketan Rathore",
      message:"You: Hey, whatsupp buddy.",
      img:"https://i.pravatar.cc/80"
    },
    {
      name:"Mohit Patel",
      message:"Mohit: Hey, I need it now",
      img:"https://i.pravatar.cc/110"
    },
    {
      name:"Kaushal Zod",
      message:"You: Send me shared link..",
      img:"https://i.pravatar.cc/100"
    },
    {
      name:"Ketan Rathore",
      message:"You: Hey, whatsupp buddy.",
      img:"https://i.pravatar.cc/80"
    },
    {
      name:"Mohit Patel",
      message:"Mohit: Hey, I need it now",
      img:"https://i.pravatar.cc/110"
    },
    {
      name:"Mohit Patel",
      message:"Mohit: Hey, I need it now",
      img:"https://i.pravatar.cc/110"
    },
    {
      name:"Ketan Rathore",
      message:"You: Hey, whatsupp buddy.",
      img:"https://i.pravatar.cc/80"
    },
    {
      name:"Mohit Patel",
      message:"Mohit: Hey, I need it now",
      img:"https://i.pravatar.cc/110"
    },
    {
      name:"Mohit Patel",
      message:"Mohit: Hey, I need it now",
      img:"https://i.pravatar.cc/110"
    },

  ]

  ngOnInit(): void {
  }
  toggleWindow(){
    this.messageCard = !this.messageCard;
  }

}
