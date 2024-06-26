import { Injectable } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'src/app/interfaces/nxen';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggued:boolean=false;
  isAdmin:boolean=false;
  users:any=[]
  private apiUrl = 'http://localhost:3000/api/users';


  constructor(private http:HttpClient) {


    this.loadUsers()
  }
  login(username: string, password: string): boolean {
    if (this.authenticateUser(username, password,this.users)) {
      if (username==='usuario1'){
        this.isAdmin=false
      }else if(username==='admin1'){
        this.isAdmin=true
      }
      this.isLoggued = true;
      return true; // Inicio de sesión exitoso
    } else {
      return false; // Inicio de sesión fallido
    }

  }

  logout() {
    // Lógica para cerrar sesión
    this.isLoggued = false;
    this.isAdmin=false
  }


  isAuthenticatedUser(): boolean {
    return this.isLoggued;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  private authenticateUser(username: string, password: string,users:User[]): boolean {
    var value=false
    users.forEach(element => {
      if (username === element.username && password === element.password){
        value= true;
      }
    });
    return value;

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  loadUsers(){
    this.getUsers().subscribe(data=>{
      this.users=data
    })
  }

}

export interface User{
  username:string;
  password:string;
  email:string;
}
