import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TrnslatePipe } from './TraslatePipe';
import { FormsModule } from '@angular/forms';

 
xdescribe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [
                AppComponent, TrnslatePipe
            ],
        }).compileComponents();
    }));





    it('should check for event target property with fake event', async(() => {
        let component: AppComponent;
        component = new AppComponent("hi",null,null);

        const el = document.createElement("input") as HTMLInputElement;
 
        const event = new KeyboardEvent("keypress", {
            "key": "Enter"
        });

        Object.defineProperty(event, 'target', { value: el, enumerable: true });
        Object.defineProperty(event, "currentTarget", { value: el, enumerable: true });
        el.dispatchEvent(event);

        let result = component.checkAlfa(event);
        expect(result).toBe(true);

    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));


});
