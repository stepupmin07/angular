import { TestBed, inject } from '@angular/core/testing';

import { ContactData2Service } from './contact-data2.service';

describe('ContactData2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactData2Service]
    });
  });

  it('should be created', inject([ContactData2Service], (service: ContactData2Service) => {
    expect(service).toBeTruthy();
  }));
});
