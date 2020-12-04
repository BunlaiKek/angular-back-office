import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items = [
    {no: 1, service: "Handed Massage", desc: "Khmer traditional massage by hand of the handicape", merchant: "VIP Massage", status: "Available", createdAt: "04/12/2020", updatedAt: "04/12/2020"},
    {no: 1, service: "Handed Massage", desc: "Khmer traditional massage by hand of the handicape", merchant: "VIP Massage", status: "Available", createdAt: "04/12/2020", updatedAt: "04/12/2020"},
    {no: 1, service: "Handed Massage", desc: "Khmer traditional massage by hand of the handicape", merchant: "VIP Massage", status: "Available", createdAt: "04/12/2020", updatedAt: "04/12/2020"},
    {no: 1, service: "Handed Massage", desc: "Khmer traditional massage by hand of the handicape", merchant: "VIP Massage", status: "Available", createdAt: "04/12/2020", updatedAt: "04/12/2020"},
    {no: 1, service: "Handed Massage", desc: "Khmer traditional massage by hand of the handicape", merchant: "VIP Massage", status: "Available", createdAt: "04/12/2020", updatedAt: "04/12/2020"},
    {no: 1, service: "Handed Massage", desc: "Khmer traditional massage by hand of the handicape", merchant: "VIP Massage", status: "Available", createdAt: "04/12/2020", updatedAt: "04/12/2020"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
