import { Injectable } from '@angular/core';

interface Disciplinas {
  title: string;
}

@Injectable()
export class DisciplinasService {
  list: Array<Disciplinas> = [];

  constructor() {}

  getList() {
    return this.list;
  }
  add(title: string) {
    this.list.push({ title });
  }
  remove(index: number) {
    this.list.splice(index, 1);
  }
}
