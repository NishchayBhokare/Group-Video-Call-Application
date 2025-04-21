import { Component } from '@angular/core';

@Component({
  selector: 'app-video-screen',
  standalone: false,
  templateUrl: './video-screen.component.html',
  styleUrl: './video-screen.component.css'
})
export class VideoScreenComponent {

  //Data Members (Variables) 
  isMicrophoneMute:boolean = true; 
  isVideoShare:boolean = false;
  isCallDisconnect:boolean = false;
  isMsgBoxOpen:boolean = false;
  msgArr:any[]=[]; //msg array to store comments added by user.
  inputMsg:any;

  //In real time, we will recieve these details from API's. For now, mocking API responses.
  personArr:any[]=[['James','Michel','Robert'],['Ellisa','John','David'],['William','Richard','Joseph']];

  personImgArr:any[]=[['assets/images/person_1.jpg','assets/images/person_2.jpg','assets/images/person_3.jpg'],
                      ['assets/images/person_4.jpg','assets/images/person_5.jpg','assets/images/person_6.jpg'],
                      ['assets/images/person_7.jpg','assets/images/person_8.jpg','assets/images/person_9.jpg']];
  
  personsMsgArr:any[]=[['John','Hi team, just a quick update — the client wants the new dashboard module ready for internal testing by Friday. How are things progressing?'],
  ['Michel','Hey John, I’ve completed the UI components and integrated the API responses for the analytics section. I’m just finishing up responsiveness and accessibility fixes. Should be done by tomorrow.'],
  ['You','I’ve pushed the final version of the APIs to the staging server. Michel, you can start integrating the user activity API now. Let me know if you face any issues.'],
  ['Michel','Thanks, Richard. I’ll test it and ping you if there’s anything off.']];


  //Methods to handle user interaction.
  handleMicrophone(){
    let muteStatus = this.isMicrophoneMute? 'unmute ' : 'mute ';

    if(confirm("Are you sure want to " + muteStatus + 'Microphone')){
      this.isMicrophoneMute = !this.isMicrophoneMute; //handling microphone interaction.
    }
  }

  handleScreen(){

    let videoStatus = this.isVideoShare ? 'stop video ' : 'start video ';

    if(confirm("Are you sure want to " + videoStatus)){
      this.isVideoShare = !this.isVideoShare; //handling Share video interaction.
    }
  }

  disconnectCall(){
    
    if(confirm("Are you sure want to disconnect call")){
      alert("Thank you for joining. Call is Disconnected."); //show alert to user once call get's disconnect.
    }
  }

  sendMsg(){
    this.msgArr.push(this.inputMsg); //once user added comment, add this comment inside message array.
    this.inputMsg=""; //erase input field.
  }

  handleMessageBox(){ //If msgBox is not open, then open it. If it's open, then close it.
    this.isMsgBoxOpen = !this.isMsgBoxOpen;
  }
}
