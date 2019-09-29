import { Component, OnInit } from '@angular/core';
import {SUPPORTED_LANGUAGES, UK} from '../constants/general.constants';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(SUPPORTED_LANGUAGES);
    translate.setDefaultLang(SUPPORTED_LANGUAGES[0]);

    const browserLang = translate.getBrowserLang();
    if (browserLang in SUPPORTED_LANGUAGES) {
      translate.use(browserLang);
    } else {
      translate.use(UK);
    }
  }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  get currentLanguage() {
    return this.translate.currentLang;
  }

}
