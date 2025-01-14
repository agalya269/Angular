import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { DepartmentstaffComponent } from './departmentstaff/departmentstaff.component';
import { AttendanceentryComponent } from './attendanceentry/attendanceentry.component';
import { MarkentryComponent } from './markentry/markentry.component';
import { StudenthomepageComponent } from './studenthomepage/studenthomepage.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { DeparmenttoppersComponent } from './deparmenttoppers/deparmenttoppers.component';
import { AboutdepartmentComponent } from './aboutdepartment/aboutdepartment.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'departmentstaff', component: DepartmentstaffComponent },
  { path: 'attendance', component: AttendanceentryComponent },
  { path: 'mark', component: MarkentryComponent },
  { path: 'student', component: StudenthomepageComponent },
  { path: 'admin', component: AdminhomepageComponent },
  { path: 'toppers', component: DeparmenttoppersComponent },
  { path: 'department', component: AboutdepartmentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
