import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private _fileUploaderURL = '';


  constructor(private http: Http) { }

  /**
   * get
   */
  public get(url: string): Observable<any> {
    return this.http.get(url);
  }

  /**
   * post
   */
  public post(url: string, body: any, headers?: Headers) {
    return this.http.post(url, body, { headers: headers });
  }


  /**
   * put
   */
  public put(url: string, body: any, headers?: Headers): Observable<Response> {
    return this.http.put(url, body, { headers: headers });
  }

  /**
   * delete
   */
  public delete(url: string, body: any, headers?: Headers): Observable<Response> {
    return this.http.delete(url, new RequestOptions({
      headers: headers,
      body: body
    }));
  }

  public get fileUploaderURL(): string {
    return this._fileUploaderURL;
  }
  public set fileUploaderURL(value: string) {
    this._fileUploaderURL = value;
  }
}
