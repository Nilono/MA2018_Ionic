import { Component } from '@angular/core';

import { NavigationPage } from '../navigation/navigation';
import { DocumentationPage } from '../documentation/documentation';
import { ComponentsPage } from '../components/components';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ComponentsPage;
  tab2Root = NavigationPage;
  tab3Root = DocumentationPage;

  constructor() {

  }
}
