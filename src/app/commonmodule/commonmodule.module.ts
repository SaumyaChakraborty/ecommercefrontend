import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FronteendHeaderComponent } from './layout/fronteend-header/fronteend-header.component';
import { FronteendFooterComponent } from './layout/fronteend-footer/fronteend-footer.component';
import { BackofficeFooterComponent } from './layout/backoffice-footer/backoffice-footer.component';
import { BackofficeHeaderComponent } from './layout/backoffice-header/backoffice-header.component';
import { MaterialuiModule } from './materialui/materialui.module';



@NgModule({
  declarations: [
    FronteendHeaderComponent,
    FronteendFooterComponent,
    BackofficeFooterComponent,
    BackofficeHeaderComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialuiModule
  ],
  exports:[
    FronteendHeaderComponent,
    FronteendFooterComponent,
    BackofficeFooterComponent,
    BackofficeHeaderComponent,
    MaterialuiModule
    
  ]
})
export class CommonmoduleModule { }
