import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { DepartmentstaffComponent } from './departmentstaff/departmentstaff.component';
import { NavComponent } from './nav/nav.component';
import { AttendanceentryComponent } from './attendanceentry/attendanceentry.component';
import { MarkentryComponent } from './markentry/markentry.component';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { StudenthomepageComponent } from './studenthomepage/studenthomepage.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { DeparmenttoppersComponent } from './deparmenttoppers/deparmenttoppers.component';
import { AboutdepartmentComponent } from './aboutdepartment/aboutdepartment.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    GalleryComponent,
    LoginComponent,
    DepartmentstaffComponent,
    NavComponent,
    AttendanceentryComponent,
    MarkentryComponent,
    StudenthomepageComponent,
    AdminhomepageComponent,
    DeparmenttoppersComponent,
    AboutdepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // Ensure RouterModule is imported
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
