import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-assignment';
  keyword = '';
  keyword1 = [{ key: '' }];

  addToKeywords() {

    if (this.keyword.length > 1) {
      var res = this.keyword.split(",");
      this.keyword1.push({ 'key': res[0] })
      if (this.keyword1.length) {
        this.keyword = ''
      }
    }
  }
  popkeyword(data: any) {
    for (let i = 0; i < this.keyword1.length; i++) {
      if (this.keyword1[i].key == data) {
        this.keyword1.splice(i, 1)
        break;
      }
    }

  }
}
