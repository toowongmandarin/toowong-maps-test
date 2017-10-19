import { Injectable } from '@angular/core';

@Injectable()
export class WindowRef {
   get nativeWindow() : any {
      return window;
   }

   redirHttps() {
     const window = this.nativeWindow;
     if ((window.location.hostname != 'localhost' && window.location.hostname.indexOf('10.0.0') == -1) && window.location.protocol != 'https:') {
       const url = `https://${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}${window.location.pathname}${window.location.hash}`;
       console.log(url);
       window.location = url;
     } else {
       console.log(`No https redir`);
     }
   }

   location(url) {
     this.nativeWindow.location = url;
   }
}
