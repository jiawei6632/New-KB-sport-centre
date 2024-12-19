import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { AuthenticatedResult, OidcSecurityService } from 'angular-auth-oidc-client';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { Observable, map, of, switchMap } from 'rxjs';
import { ThemeComponent } from '../theme/theme.component';

@Component({
  standalone: true,
  imports: [CommonModule, OverlayPanelModule, AvatarModule, ButtonModule, ThemeComponent],
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
  private authService = inject(OidcSecurityService);
  private breakpointObserver = inject(BreakpointObserver);
  // private userProfileService = inject(UserProfileService);

  isLogin$: Observable<boolean>;
  username$: Observable<string> | undefined;
  email$: Observable<string> | undefined;
  avatarCapsuleHide$: Observable<boolean> = of(false);
  userInitial: string = '';

  constructor() {
    this.isLogin$ = this.authService.isAuthenticated$.pipe(map((res: AuthenticatedResult) => res.isAuthenticated));

    // this.username$ = this.isLogin$.pipe(
    //   switchMap((loggedIn) => {
    //     if (loggedIn) {
    //       return this.userProfileService.userProfileSubject.pipe(
    //         map((profile) => {
    //           this.email$ = of(profile?.Email || '');
    //           this.userInitial = profile?.Name ? profile?.Name.charAt(0).toUpperCase() : '';
    //           return profile?.Name || '';
    //         })
    //       );
    //     } else {
    //       return of('');
    //     }
    //   })
    // );
  }

  ngOnInit() {
    this.avatarCapsuleHide$ = this.breakpointObserver.observe(['(min-width: 768px)']).pipe(
      map((state: BreakpointState) => {
        return state.matches;
      })
    );
  }
  LogoutClick() {
    this.authService.logoff().subscribe();
  }

  LoginClick() {
    this.authService.authorize();
  }

  // AccountClick() {
  //   this.username$?.subscribe((username) => {
  //     this.router.navigate([`/user-manager/update/${username}`]);
  //   });
  // }
  // AccountClick() {
  //   window.open('https://authapp.dk-schweizer.com/profile', '_blank', 'noreferrer');
  // }
}
