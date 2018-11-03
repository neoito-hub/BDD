import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menu = {
    theme: '', // background color
    logo: '',
    items: [
      {
        id: 1,
        menu: 'Dashboard',
        icon: 'card_travel',
        url: '#'
      },
      {
        id: 2,
        menu: 'E Form',
        icon: 'folder',
        submenu: [
          { name: 'New e-form', url: 'e-form' },
          { name: 'E-Form list', url: 'e-form-list' }
        ],
        url: '#'
      },
      {
        id: 3,
        menu: 'Kick Off',
        icon: 'group',
        submenu: [
          { name: 'Clients', url: 'e-form' },
          { name: 'Roles', url: 'e-form-list' },
          { name: 'Services', url: 'e-form' },
          { name: 'Resources', url: 'e-form-list' }
        ],
        url: '#'
      },
      {
        id: 4,
        menu: 'Settings',
        icon: 'settings',
        url: '#'
      }
    ],
    breadcrumbs: [
      // breadcrumbs
      {
        id: 1,
        menu: 'b1',
        url: '#',
        icon: ''
      },
      {
        id: 2,
        menu: 'b2',
        url: '#'
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
