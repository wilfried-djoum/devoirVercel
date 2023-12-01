import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilComponent } from './profil.component';

describe('ProfilComponent', () => {
  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilComponent]
    });
    fixture = TestBed.createComponent(ProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("devrait restituer correctement le contenu du header", () => {
    const headerContent = fixture.nativeElement.querySelector('.header-content');
    expect(headerContent).toBeTruthy();
  });

  it("Ceci devrait contenir 5 icones", () => {
    const icones = fixture.nativeElement.querySelectorAll('.controls .control i');
    expect(icones.length).toBe(6)
  })

  it("devrait contenir mon nom", () => {
    const nomuser = fixture.nativeElement as HTMLElement;
    expect(nomuser.querySelector('.header .header-content .right-header .name .nom')?.textContent).toContain('Djoum Nguemtchue Wilfried.');
  })

  it("devrait contenir ma classe", () => {
    const nomuser = fixture.nativeElement as HTMLElement;
    expect(nomuser.querySelector('.header .header-content .right-header .name .classe')?.textContent).toContain('Ingenieur 4 ISI');
  })
});
