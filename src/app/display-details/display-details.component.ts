import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  timeStamp = new Date();
  showSecretParagraph = false;
  messageSecretParagraph = 'Secret details shown';
  displayCount = 0;
  displays : string[] = [];

  onDisplayClick(){
    this.timeStamp = new Date();
    this.showSecretParagraph = true;
    this.displayCount++;
    this.displays.push('#' + this.displayCount + ' - displayed details at ' + this.timeStamp);
    setTimeout(
      () => {
        this.showSecretParagraph = false;
      }
      ,2000);
  }

  setColor(i : number){    
    if(i >= 5){
      return 'blue';
    } else {
      return 'white'
    }
  }

}
