import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from '../../services/middleware.service';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material';
import { ExcelService } from '../../services/excel.service';

export interface Products {
  checked: boolean;
  FundDocuments: string;
  NumberOfDocuments: number;
  IsinsNotEqualToFundCodes: number;
  InvalidUrl: number;
  OtherIssues: number;
  LastUpdated: string;
  highlighted?: boolean;
}

const PRODUCT_DATA: Products[] = [
  {
    checked: false,
    FundDocuments: 'KIID Documents',
    NumberOfDocuments: 8632,
    IsinsNotEqualToFundCodes: 0,
    InvalidUrl: 0,
    OtherIssues: 0,
    LastUpdated: '5/22/19 10:25 AM',
  },
  {
    checked: false,
    FundDocuments: 'Institutional Fact Sheet',
    NumberOfDocuments: 89,
    IsinsNotEqualToFundCodes: 15,
    InvalidUrl: 0,
    OtherIssues: 0,
    LastUpdated: '5/8/19 9:16 AM',
  },
  {
    checked: false,
    FundDocuments: 'Retail Fact Sheet',
    NumberOfDocuments: 14,
    IsinsNotEqualToFundCodes: 1,
    InvalidUrl: 1,
    OtherIssues: 0,
    LastUpdated: '5/22/19 10:09 AM',
  },
  {
    checked: false,
    FundDocuments: 'Strategy Highlights',
    NumberOfDocuments: 39,
    IsinsNotEqualToFundCodes: 0,
    InvalidUrl: 0,
    OtherIssues: 0,
    LastUpdated: '5/8/19 9:16 AM',
  },
  {
    checked: false,
    FundDocuments: 'Prospectuses',
    NumberOfDocuments: 1,
    IsinsNotEqualToFundCodes: 1,
    InvalidUrl: 0,
    OtherIssues: 0,
    LastUpdated: '5/22/19 10:21 AM',
  },
  {
    checked: false,
    FundDocuments: 'Annual Shareholder Report',
    NumberOfDocuments: 0,
    IsinsNotEqualToFundCodes: 0,
    InvalidUrl: 0,
    OtherIssues: 0,
    LastUpdated: '5/22/19 10:22 AM',
  },
  {
    checked: false,
    FundDocuments: 'Semi-Annual Shareholder Report',
    NumberOfDocuments: 0,
    IsinsNotEqualToFundCodes: 0,
    InvalidUrl: 0,
    OtherIssues: 0,
    LastUpdated: '5/22/19 10:22 AM',
  },
  {
    checked: false,
    FundDocuments: 'Key Facts Statements',
    NumberOfDocuments: 72,
    IsinsNotEqualToFundCodes: 0,
    InvalidUrl: 0,
    OtherIssues: 0,
    LastUpdated: '5/8/19 9:16 AM',
  },
  {
    checked: false,
    FundDocuments: 'Commentaries',
    NumberOfDocuments: 36,
    IsinsNotEqualToFundCodes: 0,
    InvalidUrl: 0,
    OtherIssues: 0,
    LastUpdated: '5/8/19 9:16 AM',
  },
  {
    checked: false,
    FundDocuments: 'Institutional I Share Fact Sheet',
    NumberOfDocuments: 0,
    IsinsNotEqualToFundCodes: 0,
    InvalidUrl: 0,
    OtherIssues: 0,
    LastUpdated: '5/22/19 10:21 AM',
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'checked',
    'FundDocuments',
    'NumberOfDocuments',
    'IsinsNotEqualToFundCodes',
    'InvalidUrl',
    'OtherIssues',
    'LastUpdated',
  ];
  dataSource = new MatTableDataSource<Products>(PRODUCT_DATA);
  strategyHighlights: any;
  institutionalFactSheet: any;
  selectedProduct: any;

  constructor(private middlewareService: MiddlewareService, private excelService: ExcelService) {}
  exportAsXLSX(product): void {
    this.selectedProduct = product;
    if (this.selectedProduct.FundDocuments === 'Strategy Highlights') {
      this.excelService.exportAsExcelFile(this.strategyHighlights, 'Strategy Highlights');
    } else if (this.selectedProduct.FundDocuments === 'Institutional Fact Sheet') {
      this.excelService.exportAsExcelFile(this.institutionalFactSheet, 'Institutional Fact Sheet');
    }
  }

  ngOnInit() {
    this.middlewareService.getStrategyHighlights().subscribe(data => {
      this.strategyHighlights = data;
      // console.log(this.strategyHighlights);
    });

    this.middlewareService.getInstitutionalFactSheet().subscribe(data => {
      this.institutionalFactSheet = data;
      // console.log(this.institutionalFactSheet);
    });
  }
}
