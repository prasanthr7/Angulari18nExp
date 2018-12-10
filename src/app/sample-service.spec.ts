import { TestBed, async } from '@angular/core/testing';
import { SampleService } from './sample-service';

describe('sample-service', () => {
    let service: SampleService;
    beforeEach(async () => {
        TestBed.configureTestingModule({ providers: [SampleService] });
        service = TestBed.get(SampleService);
    });
    
    it("should return Some Data when called with true", () => {
        
        expect(service.getData(true)).toBe("Some Data");

    });

    it("should return Other Data when called with false ", () => {
        expect(service.getData(false)).toBe("Other Data");
    });

});