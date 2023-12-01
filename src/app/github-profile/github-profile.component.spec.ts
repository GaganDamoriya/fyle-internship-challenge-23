import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { ApiService } from '../services/api.service';
import { GithubProfileComponent } from './github-profile.component';
import { convertToParamMap, ParamMap, Params } from '@angular/router';

describe('GithubProfileComponent', () => {
  let component: GithubProfileComponent;
  let fixture: ComponentFixture<GithubProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GithubProfileComponent],
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({}) } }, // Mock ActivatedRoute
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export const createParamMap = (params: Params): ParamMap => {
  return {
    has(name: string): boolean {
      return params.hasOwnProperty(name);
    },
    get(name: string): string | null {
      return params[name] || null;
    },
    getAll(name: string): string[] {
      return params[name] ? [params[name]] : [];
    },
    keys: Object.keys(params),
  };
};
