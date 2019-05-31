import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {
  strategyApiURL = '../assets/StrategyHighlights.json';
  institutionalApiURL = '../assets/InstitutionalFactSheet.json';

  constructor(private httpClient: HttpClient) {}
  getStrategyHighlights(): Observable<any> {
    return this.httpClient.get<any>(this.strategyApiURL);
  }

  getInstitutionalFactSheet(): Observable<any> {
    return this.httpClient.get<any>(this.institutionalApiURL);
  }
}
