import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nga-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log("el componente se acaba de cargar");
  }
}
