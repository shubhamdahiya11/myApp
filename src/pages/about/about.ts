import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IOSFilePicker } from '@ionic-native/file-picker';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private filePicker: IOSFilePicker) {
    this.filePicker.pickFile()
      .then(uri => console.log(uri))
      .catch(err => console.log('Error', err));
  }

}
