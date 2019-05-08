import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
  styles: [
    `
      .highlighted {
        background-color: blue;
        color: white;
      }
    `
  ]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "the server has not been created";
  userName = "";
  displayToggle = false;
  clicksArray = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  displayToggler(e: Event) {
    this.displayToggle = !this.displayToggle;
    this.clicksArray.push(e.timeStamp);
    console.log(this.clicksArray);
  }
  ngOnInit() {}
  // onUpdateServerName(e: Event) {
  //   this.serverName = (<HTMLInputElement>e.target).value;
  // }

  onResetUserName() {
    this.userName = "";
  }
}
