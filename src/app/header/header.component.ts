import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SUPPORTED_LANGUAGES, UK, EN, RU} from '../constants/general.constants';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  TABLET_SIZE = 1024;

  showAvatar = false;
  @ViewChild('scaledAvatar') scaledAvatar: ElementRef;

  selectedLang: any;

  constructor(private translate: TranslateService) {
    translate.addLangs(SUPPORTED_LANGUAGES);
    translate.setDefaultLang(SUPPORTED_LANGUAGES[0]);

    const browserLang = translate.getBrowserLang();
    if (browserLang in SUPPORTED_LANGUAGES) {
      translate.use(browserLang);
    } else {
      translate.use(UK);
    }

    this.selectedLang = this.translate.currentLang;
  }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  onAvatarHover(event) {
    if (innerWidth <= this.TABLET_SIZE) {
      return;
    }

    this.showAvatar = true;
    this.scaledAvatar.nativeElement.style.transition = 'visibility 0s .5s, opacity .5s, margin-top .5s linear';
  }

  onAvatarMouseLeave(event) {
    this.showAvatar = false;
  }

  get currentLanguage() {
    return this.translate.currentLang;
  }

  getLangLabel(lang) {
    switch (lang) {
      case UK: return 'Українська';
      case RU: return 'Русский';
      case EN: return 'English';
    }
  }

}
