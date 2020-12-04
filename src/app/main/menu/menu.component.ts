import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
  menuItems: MenuItem[] = [
    {icon: "fas fa-tachometer-alt", title: "Dashbaord", link: "dashboard"},
    {icon: "fas fa-shopping-cart", title: "Reservations", link: "reservations"},
    {icon: "fas fa-percent", title: "Promotions", link: "promotions"},
    {icon: "fas fa-briefcase", title: "Services", link: "services"},
  ]

  constructor() { }

  ngOnInit(): void {
  }


}

export interface MenuItem {
  title: string;
  link: string;
  icon: string;
}
