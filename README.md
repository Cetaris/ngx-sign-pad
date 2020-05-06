# Kai

- remove from root package.json: "ngx-sign-pad": "file:dist/sign-pad-lib/ngx-sign-pad-0.0.- 1-alpha.4.tgz"
- npm i
- cd projects/sign-pad-lib
- npm i
- cd root
- npm run npm_package
- add back to root package.json: "ngx-sign-pad": "file:dist/sign-pad-lib/ngx-sign-pad-0.0.- 1-alpha.4.tgz",
- npm i
- npm run start

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
import { Component, ViewChild } from "@angular/core";
import { EImageType, SignPadComponent } from "ngx-sign-pad";

@Component({
  template:
    '<ngx-sign-pad [(signature)]="signature" [type]="imageTypes.SVG"></ngx-sign-pad>',
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
