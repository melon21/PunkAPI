import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BeerService } from '../services/beer.service';
import { IBeer } from '../ibeer';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  dataSource: MatTableDataSource<IBeer>;
  @ViewChild(MatSort, {static: true})sort: MatSort;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  displayedColumns: string[] = [
    'id',
    'name',
    'tagline',
    'image_url',
    'abv',
  ];
  constructor(private beerService: BeerService) { }

  async ngOnInit() {
this.dataSource = new MatTableDataSource(await this.beerService.GetBeers());
  }

}
