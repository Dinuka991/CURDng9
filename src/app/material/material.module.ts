import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';


const MaterialComponent =  [

  MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTabsModule,
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatNativeDateModule,
    

]

@NgModule({

  imports: [ MaterialComponent
    
  ],
  exports: [ MaterialComponent


  ]
})
export class MaterialModule { }
