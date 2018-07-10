import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {HomePage} from '../home/home';
import {BiblePage} from '../bible/bible';
import {DonatePage} from '../donate/donate';
import {LocationPage} from '../location/location';
import {EventsPage} from '../events/events';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BiblePage;
  tab3Root = DonatePage;
  tab4Root = LocationPage;
  tab5Root = EventsPage;
  tab6Root = AboutPage;

  constructor() {

  }
}
