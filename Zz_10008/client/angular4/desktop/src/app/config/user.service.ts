import {Injectable} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Headers} from '@angular/http';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';

@Injectable()
export class UserService {



  currentUser;

  constructor(private apiService : ApiService, private config : ConfigService) {}

  initUser() {
  
  }

  getMyInfo() {


  }

  getAll() {

  }

}
