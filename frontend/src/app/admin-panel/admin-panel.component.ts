import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  public adminusername;
  opennavforStaff = false
  panelOpenState = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
        private breakpointObserver: BreakpointObserver,
        public actroute: ActivatedRoute
    ) {}

    // getAdminParams(){
    //   this.adminusername = this.actroute.snapshot.params.adminusernames;
    //   console.log(this.adminusername);
    // }
    ngOnInit(): void {
      // setTimeout(() => {
      //   this.opennavforStaff = true
      // }, 4000);
        this.adminusername = JSON.parse(sessionStorage.getItem('x-name'));
        console.log(this.adminusername,'joshua');
        // this.getAdminParams();
    }

}
