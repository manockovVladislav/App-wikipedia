import { Component, OnInit } from '@angular/core';
import { WikiService } from '../shared/wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  items: any[] = [];

  constructor(private wiki: WikiService) { }

  public search(term: string) {
    /*Подписка на изменения и ответ помещен в массив items*/
    this.wiki.search(term).subscribe(response => this.items = response);
  }

  ngOnInit() {
  }

}
