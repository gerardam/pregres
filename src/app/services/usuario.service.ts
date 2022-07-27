import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  saveUser(usuario: Usuario): void {}
}
