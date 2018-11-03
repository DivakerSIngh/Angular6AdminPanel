import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuestionComponent } from './pages/question/question.component';

import { CmsComponent } from './pages/cms/cms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LeftmenuComponent } from './component/leftmenu/leftmenu.component';
import { ErrorComponent } from './component/error/error.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule
} from '@angular/material';
import { ConfirmationBoxComponent } from './component/confirmation-box/confirmation-box.component';
// import { AdslistComponent } from './pages/adslist/adslist.component';
// import { AdsDetailsComponent } from './pages/ads-details/ads-details.component';
import { AgmCoreModule } from '@agm/core';
import { ChartModule } from "angular-highcharts";





@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,FormsModule, ReactiveFormsModule,
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCDaxE9p2gYHKVnEJ6AbN03m0dSPRMCccc'
  }),
  ChartModule
  ],
  declarations: [DashboardComponent, QuestionComponent, CmsComponent, LeftmenuComponent, ErrorComponent, PaginationComponent, ConfirmationBoxComponent],
  entryComponents: [ConfirmationBoxComponent]
})
export class LayoutModule { }
