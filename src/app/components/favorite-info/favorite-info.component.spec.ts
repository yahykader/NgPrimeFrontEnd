import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteInfoComponent } from './favorite-info.component';

describe('FavoriteInfoComponent', () => {
  let component: FavoriteInfoComponent;
  let fixture: ComponentFixture<FavoriteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
