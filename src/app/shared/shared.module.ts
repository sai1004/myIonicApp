import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ApiService } from './services/api.service';
 
import { HttpClientModule } from '@angular/common/http';
// import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ], 

})
export class SharedModule { }
