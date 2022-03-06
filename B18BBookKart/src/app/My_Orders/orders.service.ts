import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private http:HttpClient) {  }

  getMyOrder(){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')

 

    .set('Authorization', 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdWJhc2giLCJ1c2VyaWQiOiI0MDMiLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiI5NmYzZWZmYi1hM2Q2LTRlNDgtYjYxMC1kNmU2ZjRjMjQ1NDIiLCJleHAiOjE2NDI0MjA0OTcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.fflvX9Nt_fpdnbtce4ATnDwIBjpEsnQzybY4E35ZOgo");
    let url="https://bookcart.azurewebsites.net/api/Order/403";

    return this.http.get ( url , { 'headers': headers })
  }

  
}