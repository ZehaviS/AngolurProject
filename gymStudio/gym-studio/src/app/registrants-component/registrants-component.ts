import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef, CellClickedEvent } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RegistrantsService } from '../services/registrants';
import { RegistrantDetailDialogComponent } from './registrant-detail-dialog.component';

@Component({
  selector: 'app-registrants',
  standalone: true,
  imports: [CommonModule, AgGridAngular, MatDialogModule, MatButtonModule],
  templateUrl: './registrants-component.html',
  styleUrls: ['./registrants-component.css'],
})
export class RegistrantsComponent implements OnInit {
  rowData: any[] = [];

  columnDefs: ColDef[] = [
    { field: 'firstName', headerName: 'שם', filter: true, sortable: true },
    { field: 'lastName', headerName: 'משפחה', filter: true, sortable: true },
    { field: 'phone', headerName: 'טלפון', filter: true, sortable: true },
    { field: 'id', headerName: 'מספר זהות', filter: true, sortable: true },
    { field: 'lesson', headerName: 'שיעור', filter: true, sortable: true },
    { field: 'price', headerName: 'מחיר', filter: true, sortable: true },
    {
      field: 'paid',
      headerName: 'שולם',
      filter: true,
      sortable: true,
      valueFormatter: params => params.value ? 'כן' : 'לא'
    },
    {
      headerName: 'פרטים',
      field: 'details',
      cellRenderer: (params: any) => '<button class="details-button">פרטים</button>',
      filter: false,
      sortable: false,
      width: 120
    }
  ];

  constructor(
    private registrantsService: RegistrantsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.rowData = this.registrantsService.getRegistrants();
  }

  onCellClicked(event: CellClickedEvent) {
    if (event.colDef.field === 'details' && event.data) {
      this.dialog.open(RegistrantDetailDialogComponent, {
        width: '480px',
        data: event.data
      });
    }
  }
}