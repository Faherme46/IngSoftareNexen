import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  DropdownModule,
  GridModule,
  HeaderModule,
  NavModule,
  ProgressModule,
  SidebarModule
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import {HeaderComponent } from './header.component';

describe('DefaultHeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GridModule, HeaderModule, IconModule, NavModule, BadgeModule, AvatarModule, DropdownModule, BreadcrumbModule, RouterTestingModule, SidebarModule, ProgressModule, ButtonGroupModule, ReactiveFormsModule, HeaderComponent],
    providers: [IconSetService]
})
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
