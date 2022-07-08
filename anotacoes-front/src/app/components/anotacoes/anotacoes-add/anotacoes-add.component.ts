import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';
import { Component, Input, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Nota } from 'src/app/models/nota';
import { AnotacaoService } from 'src/app/services/anotacao.service';

@Component({
  selector: 'app-anotacoes-add',
  templateUrl: './anotacoes-add.component.html',
  styleUrls: ['./anotacoes-add.component.scss']
})
export class AnotacoesAddComponent implements OnInit {

  @Input()
  status = new Subject<boolean>();

  @Input()
  notaInsert = new Nota({categoria: new Categoria({})});

  categoriasList = new Observable<Categoria[]>();

  constructor(private notaService: AnotacaoService,
              private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.getAllCategoria();
  }

  getAllCategoria() {
    this.categoriasList = this.categoriaService.getAll();
  }

  save(){
    console.log(this.notaInsert);
    if(this.validate()) {
      this.notaService
      .save(this.notaInsert)
      .subscribe((notaSaved) => {
        if(notaSaved.idNota)
          this.cancel();
        }
      )
    }
  }

  cancel() {
    this.status.next(false);
  }

  validate() {
    if(typeof this.notaInsert.categoria == 'undefined'){
      return false;
    }
    return true;
  }
}
