import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showEmoji:boolean=false;
  title = 'rapidDevelopment';
  selected:any = 123;
  screen={
    scrHeight:window.innerHeight,
    scrWidth:window.innerWidth,
  }
  
  constructor(){
    console.log(this.screen.scrHeight, this.screen.scrWidth);
    this.screen.scrHeight = window.innerHeight;
    this.screen.scrWidth = window.innerWidth;
    console.log(this.screen.scrHeight, this.screen.scrWidth);
  }

  openEmoji(){
    this.showEmoji=!this.showEmoji;
  }
  
  @HostListener('window:resize', ['$event'])
    getScreenSize(event:any) {
          this.screen.scrHeight = window.innerHeight;
          this.screen.scrWidth = window.innerWidth;
          console.log(this.screen.scrHeight, this.screen.scrWidth);
    }

  activeChat:any = {}

  emojiForm: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required),
  })

  skills = [
    "Design", "Frontend Developer", "React Developer", "NodeJS", "Flutter"
  ]

  chats={
    "123":{
      
    },
    "asjdgakjshd24872":{

    }
  }
  mobileShow: boolean = false;

  selectChat(id:any){
    this.activeChat = this.chat.find(el => el.id == id);
    console.log("Chat selected - ", this.activeChat);
    // this.screen.scrWidth = 1000;
    if(window.innerWidth < 991){
      this.mobileShow = true;
    }
  }

  closeSelectedChat(){
    this.activeChat = false
  }

  message = [
    {
      text: "Okay",
      time: "10:45",
      you: true
    },
    {
      text: "There will be many options for both freelancer and employer",
      time: "10:43",
      you: false
    },
    {
      text: "We have to develop a website for freelancer which works on cryptography where freelancer will have asured that there money will be given to them after the work and employer will be asured that their work will be delivered to them..",
      time: "10:43",
      you: false
    },
    {
      text: "Yeah Tell me",
      time: "10:42",
      you: true
    },
    {
      text: "I have a work for you",
      time: "10:42",
      you: false
    },
    {
      text: "I am also Fine!",
      time: "10:42",
      you: false
    },
    {
      text: "I am Fine how are you",
      time: "10:41",
      you: true
    },
    {
      text: "Hello How are you",
      time: "10:41",
      you: false
    },
  ]


  chat = [
    {
      id:0,
      name: "Kaushal Zod",
      message: "You: Send me shared link..",
      img: "https://i.pravatar.cc/100",
      messages : this.message
    },
    {
      id:2,
      name: "Aditi Zod",
      message: "Kaushal: Hey, How are you..",
      img: "https://i.pravatar.cc/90",
      messages : this.message
    },
    {
      id:3,
      name: "Ketan Rathore",
      message: "You: Hey, whatsupp buddy.",
      img: "https://i.pravatar.cc/80",
      messages : [

      ]
    },
    {
      id:4,
      name: "Mohit Patel",
      message: "Mohit: Hey, I need it now",
      img: "https://i.pravatar.cc/110",
      messages : this.message

    },
    {
      id:11,
      name: "Kaushal Zod",
      message: "You: Send me shared link..",
      img: "https://i.pravatar.cc/100",
      messages : this.message
    },
    {
      id:5,
      name: "Ketan Rathore",
      message: "You: Hey, whatsupp buddy.",
      img: "https://i.pravatar.cc/80",
      messages : this.message
    },
    {
      id:6,
      name: "Mohit Patel",
      message: "Mohit: Hey, I need it now",
      img: "https://i.pravatar.cc/110",
      messages : this.message
    },
    {
      id:7,
      name: "Mohit Patel",
      message: "Mohit: Hey, I need it now",
      img: "https://i.pravatar.cc/110",
      messages : this.message
    },
    {
      id:8,
      name: "Ketan Rathore",
      message: "You: Hey, whatsupp buddy.",
      img: "https://i.pravatar.cc/80",
      messages : this.message
    },
    {
      id:9,
      name: "Mohit Patel",
      message: "Mohit: Hey, I need it now",
      img: "https://i.pravatar.cc/110",
      messages : this.message
    },
    {
      id:10,
      name: "Mohit Patel",
      message: "Mohit: Hey, I need it now",
      img: "https://i.pravatar.cc/110",
      messages : this.message
    },
  ]

 
  addEmoji(event: any) {
    var data: any = this.emojiForm.get('message');
    data.patchValue(data.value + event.emoji.native)
  }

}
