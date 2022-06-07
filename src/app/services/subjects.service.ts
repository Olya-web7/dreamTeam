import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectModel } from '../components/subjects/subject.model';

@Injectable({
  providedIn: 'root'
})

export class SubjectsService {
  constructor(private http: HttpClient) { }

  getSubjects() {
    return this.http.get<SubjectModel[]>('https://dtapi.if.ua/api/Subject/getRecords/');
  }
}
