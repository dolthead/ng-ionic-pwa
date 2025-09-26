import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoreInformationPage } from './more-information.page';

describe('MoreInformationPage', () => {
  let component: MoreInformationPage;
  let fixture: ComponentFixture<MoreInformationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
