import { Nota } from './../../../models/nota';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AnotacaoService } from 'src/app/services/anotacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anotacoes-list',
  templateUrl: './anotacoes-list.component.html',
  styleUrls: ['./anotacoes-list.component.scss']
})
export class AnotacoesListComponent implements OnInit {

  listarNotas$ = new Observable<Nota[]>();

  notaAction = new Nota({});

  notaSaveCurrent = new Nota({});

  criando$ = new Subject<boolean>();

  criado$ = new Subject<boolean>();

  monitoraStatusAction$ = new Subject<boolean>();


  constructor(private service: AnotacaoService) { }

  ngOnInit(): void {
    this.getList();

      this.criado$.subscribe((resp) => {
        this.criando$.next(resp);
        this.getList();
      });

      this.monitoraStatusAction$
        .subscribe(
          (resp) => {
              this.notaAction = new Nota({});
              this.getList();
          }
        )
  }

  getList() {
    this.listarNotas$ = this.service.getAll();
  }

  confirmAction(nota: Nota) {
    if(nota) {
      this.notaAction = nota;
    }
  }

  newNota() {
    this.criando$.next(true);
  }
}
