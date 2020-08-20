# Kai

- remove from root package.json: "ngx-sign-pad": "file:dist/sign-pad-lib/ngx-sign-pad-0.0.- 1-alpha.4.tgz"
- npm i
- cd projects/sign-pad-lib
- npm i
- cd ../../ (ngx-sign-pad)
- npm run package
- add back to root package.json: "ngx-sign-pad": "file:dist/sign-pad-lib/ngx-sign-pad-0.0.- 1-alpha.4.tgz",
- npm i
- npm run start

## publish to Github

0. update version# in projects/sign-pad-lib/package.json, then `npm run package`

1. update projects/sign-pad-lib/package.json,

   - "name": "@kwu-work/ngx-sign-pad",
   - "repository" - "url": "https://github.com/kwu-work/ngx-sign-pad"

2. update /package.json

   - add flag --prod in ng build to opt out of Ivy for better compatibility, as suggested by Angular

3. cd dist/sign-pad-lib, create a .npmrc file:

```
  registry=https://npm.pkg.github.com/kwu-work
  //npm.pkg.github.com/:_authToken=${GITHUB_PERSONAL_ACCESS_TOKEN}
```

4. npm login --registry=https://npm.pkg.github.com

   - user name: kwu-work
   - password: \${GITHUB_PERSONAL_ACCESS_TOKEN}

5. npm publish

# ngx-sign-pad

ngx-sign-pad is an Angular wrapper for [szimek/signature_pad](https://www.npmjs.com/package/signature_pad).

## Usage

### 1. Install

`npm install ngx-sign-pad --save`

### 2. Import SignaturePadModule

```typescript

import { SignPadModule } from 'ngx-sign-pad';

...

@NgModule({
  declarations: [ ],
  imports: [ SignPadModule ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
```

### 3. Use ngx-sign-pad

```typescript
import { Component, ViewChild } from '@angular/core';
import { EImageType, SignPadComponent } from 'ngx-sign-pad';

@Component({
  template: '<ngx-sign-pad [(signature)]="signature" [type]="imageTypes.SVG"></ngx-sign-pad>',
})
export class AppComponent {
  imageTypes = EImageType;
  signature = null;
  @ViewChild(SignPadComponent) signaturePad: SignPadComponent;

  constructor() {}

  clear() {
    this.signaturePad.clear();
  }
}
```
