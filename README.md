## https://www.npmjs.com/package/ngx-lottie

## https://dev.to/riapacheco/adding-animated-illustrations-to-an-angular-app-with-lottie-ngx-lottie-4j0o

## https://lottiefiles.com/featured?page=100

## Add Lottie Player In Angular
<pre>
<code>
You can add lottie-player as a custom element schema

npm install --save @lottiefiles/lottie-player

angular.json

"scripts": [
          "./node_modules/@lottiefiles/lottie-player/dist/lottie-player.js"
]
custom.module.ts

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomModule { }
custom.component.html

<lottie-player src="https://assets4.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json"  background="transparent"  speed="1" loop  autoplay >
</lottie-player>
</code>
</pre>
