import { Component, OnInit } from '@angular/core';
import { IServer } from "src/app/health/server";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'ar-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  servers: IServer[] = [];
  constructor(private http: HttpClient) {
    this.servers = [{ slno: 1, name: "A1", status: "NA", url: "http://telecomaustria.eastus2.cloudapp.azure.com:9876/api/home" },
    { slno: 2, name: "My SQL", status: "NA", url: "" },
    { slno: 3, name: "Easy Check", status: "NA", url: "" }];
  }

  ngOnInit() {
  }

  ping(slno: number):void {
    let serverindex = this.servers.findIndex(server => server.slno === slno);
    let url=this.servers[serverindex].url;
    this.http.get(url)
      .subscribe(
      data => {
        this.servers[serverindex].status = "Active";
      },
      err => {
        console.log('an error occurred while calling to the url');
        this.servers[serverindex].status = "InActive";
      }
      );
  }

}
