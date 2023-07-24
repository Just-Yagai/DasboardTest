import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthInterceptor } from './Interceptor.component';



describe('AuthInterceptor', () => {
  let component: AuthInterceptor;
  let fixture: ComponentFixture<AuthInterceptor>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthInterceptor]
    });
    fixture = TestBed.createComponent(AuthInterceptor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
