import { Injectable } from '@angular/core';

@Injectable()
export class DisciplinasService {
  materias: string[] = [
    'Negócios e Marketing Eletrônicos',
    'Desenvolvimento para Servidores II',
    'Ingles V',
    'Projeto de prototipagem e testes de Usabilidade',
    'Desenvolvimento para dispositivos móveis I',
    'Tópicos Especiais em Sistemas para Internet II',
    'Projeto do trabalho de graduação em Sistemas'
  ];

  constructor() {}

  add(title: string) {
    this.materias.push(title);
  }
  remove(index: number) {
    this.materias.splice(index, 1);
  }
  getList() {
    return this.materias;
  }
}
