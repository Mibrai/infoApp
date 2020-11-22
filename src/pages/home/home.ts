import { Component } from '@angular/core';
import {  NavController , AlertController,  ModalController} from 'ionic-angular';
import { CountriesProvider } from '../../providers/countries/countries';
import { NewsProvider } from '../../providers/news/news';
import {DomSanitizer} from '@angular/platform-browser';
import { NewsSignlePage } from '../news-signle/news-signle';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    availableCountries : any[];
     availableContries = [
      {
        name : 'Argentina',
        code : 'ar'
      },
      {
        name : 'Austria',
        code : 'at'
      },
      {
        name : 'Brazil',
        code : 'br'
      },
      {
        name : 'Canada',
        code : 'ca'
      },
      {
        name : 'Colombia',
        code : 'co'
      },
      {
        name : 'Czech Republic',
        code : 'cz'
      },
      {
        name : 'France',
        code : 'fr'
      },
      {
        name : 'Greece',
        code : 'gr'
      },
      {
        name : 'Hungary',
        code : 'hu'
      },
      {
        name : 'Indonesia',
        code : 'id'
      },
      {
        name : 'Israel',
        code : 'il'
      },
      {
        name : 'Japan',
        code : 'jp'
      },
      {
        name : 'Lithuania',
        code : 'lt'
      },
      {
        name : 'Mexico',
        code : 'mx'
      },
      {
        name : 'Netherlands',
        code : 'nl'
      },
      {
        name : 'Nigeria',
        code : 'ng'
      },
      {
        name : 'Philippines',
        code : 'ph'
      },
      {
        name : 'Portugal',
        code : 'pt'
      },
      {
        name : 'Russia',
        code : 'ru'
      },
      {
        name : 'Serbia',
        code : 'rs'
      },
      {
        name : 'Slovakia',
        code : 'sk'
      },
      {
        name : 'South Africa',
        code : 'za'
      },
      {
        name : 'Sweden',
        code : 'se'
      },
      {
        name : 'Taiwan',
        code : 'tw'
      },
      {
        name : 'Turkey',
        code : 'tr'
      },
      {
        name : 'Ukraine',
        code : 'ua'
      },
      {
        name : 'United States',
        code : 'us'
      },
      {
        name : 'Australia',
        code : 'au'
      },
      {
        name : 'Belgium',
        code : 'be'
      },
      {
        name : 'Bulgaria',
        code : 'bg'
      },
      {
        name : 'China',
        code : 'cn'
      },
      {
        name : 'Cuba',
        code : 'cu'
      },
      {
        name : 'Egypt',
        code : 'eg'
      },
      {
        name : 'Germany',
        code : 'de'
      },
      {
        name : 'Hong Kong',
        code : 'hk'
      },
      {
        name : 'India',
        code : 'in'
      },
      {
        name : 'Ireland',
        code : 'ie'
      },
      {
        name : 'Italy',
        code : 'it'
      },
      {
        name : 'Latvia',
        code : 'lv'
      },
      {
        name : 'Malaysia',
        code : 'my'
      },
      {
        name : 'Morocco',
        code : 'ma'
      },
      {
        name : 'New Zealand',
        code : 'nz'
      },
      {
        name : 'Norway',
        code : 'no'
      },
      {
        name : 'Polan',
        code : 'pl'
      },
      {
        name : 'Romania',
        code : 'ro'
      },
      {
        name : 'Saudi Arabia',
        code : 'sa'
      },
      {
        name : 'Singapore',
        code : 'sg'
      },
      {
        name : 'Slovenia',
        code : 'si'
      },
      {
        name : 'South Korea',
        code : 'kr'
      },
      {
        name : 'Switzerland',
        code : 'ch'
      },
      {
        name : 'Thailand',
        code : 'th'
      },
      {
        name : 'UAE',
        code : 'ae'
      },
      {
        name : 'United Kingdom',
        code : 'gb'
      },
      {
        name : 'Venezuela',
        code : 've'
      }

     ];

     newsSingle : any = NewsSignlePage;
    countrie : any = {name :'Informations'};
    rootPage : string;
    homPage : any;
    allCountries : any;
    allNews:any;
    cathegorie : string = 'general';

    currentSelectedNews :any;
     state : boolean = false;
     showSource : boolean = false;
     currentNewsUrl : any;

  constructor(public navCtrl: NavController,
     public countrieService : CountriesProvider,
      public newsServices : NewsProvider,
      public alertCtrl: AlertController,
      public domSanitizer : DomSanitizer,
      public modalCtrl : ModalController) {

        this.state =  false;
        this.showSource = false;
    this.countrieService.getAllCountries().subscribe(countries =>{
      this.allCountries = countries;
      console.log('All countries');
      console.log(countries);
      this.countrie.name = 'Germany';
      this.loadNews('de');
    });
  }

  onChange(){
    this.state =  false;
    this.showSource = false;
    let str : string = this.countrie.code;
    console.log('Selected Country is '+this.countrie.name+'  ::: alpha code = '+str);
    this.loadNews((this.countrie.code));
  }

  loadNews(code:string) {
    this.newsServices
    .getNews('top-headlines?country='+code+'&category='+this.cathegorie)
    .subscribe(data => {
      console.log('List of all Countris');
      console.log(data);
      this.allNews = data;
    });
    console.log((this.countrie.code));
  }

  onChangeCathegory(){
    if(this.countrie.code != null)
        this.loadNews(this.countrie.code);
    else{
      let alert = this.alertCtrl.create({
        title: '<ion-icon name="alert-circle-outline"></ion-icon>',
        subTitle: 'you must select the country before',
        buttons: ['close']
      });
      alert.present();
    }
  }

  onGoToNewsSinglePage(news){
    this.state =  true;

    this.currentSelectedNews =  news;
    this.currentNewsUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(''+news.url);
  }

  backHome(){
    this.state =  false;
    this.showSource = false;
  }

  async readMore(url){
    this.showSource = true;
    this.currentNewsUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(''+url);
    console.log('Current Url Value : '+this.currentNewsUrl);
    /*let modal = await this.modalCtrl.create({component : newsSingle});
    modal.present();*/
    console.log("modal active");
  }

}
