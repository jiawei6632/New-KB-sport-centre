import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingService, PagingContent, GridifyQueryExtend, DefaultPage, DefaultPageSize, BuildSortText, BuildFilterText } from 'fxt-core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';

@Component({
  selector: 'app-test-cmms',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './test-cmms.component.html',
  styleUrls: ['./test-cmms.component.less'],
  providers: [ConfirmationService, MessageService, LoadingService]
})
export class TestCMMSComponent{
  Title: string = "Test CMMS";
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private loadingService = inject(LoadingService);

  @ViewChild('fTable') fTable?: Table;

  ClonedLineData: { [s: string]: any } = {}; // Replace `any` with appropriate type when possible
  NewId: string = '';
  NewName: string = '';
  isAddEnable: boolean = false;

  PagingSignal = signal<PagingContent<any>>({} as PagingContent<any>); // Replace `any` with appropriate type when possible
  Query: GridifyQueryExtend = {} as GridifyQueryExtend;

  DEFAULT_ORDER: string = 'Name asc';

  ngOnInit(): void {
    this.SetDefaultQuery();
  }

  SetDefaultQuery() {
    this.Query.Page = DefaultPage;
    this.Query.PageSize = DefaultPageSize;
    this.Query.OrderBy = this.DEFAULT_ORDER;
    this.Query.Filter = null;
    this.Query.Includes = null;
    this.Query.Select = null;
  }

  LoadData() {
    this.loadingService.start();
    // Implement your data loading logic here
    // this.requestService.GetMany(this.Query).subscribe((x) => {
    //   this.PagingSignal.set(x);
    //   this.loadingService.stop();
    // });
  }

  Add() {
    this.isAddEnable = true;
    this.NewName = '';
  }

  SaveClick() {
    // Replace with appropriate create service logic
    // this.requestService.Create({ Name: this.NewName }).subscribe((res) => {
    //   this.PagingSignal.update((x) => ({
    //     Content: [res, ...x.Content],
    //     TotalElements: x.TotalElements + 1,
    //   }));
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Data have been added successfully',
    //   });
    //   this.isAddEnable = false;
    //   this.NewName = '';
    // });
  }

  Search(data: string) {
    if (this.fTable != null) {
      this.fTable.first = 0;
      this.fTable.filters = {
        Name: [
          {
            value: data,
            matchMode: "=*",
            operator: "and",
          },
        ],
      };
    }

    const event: TableLazyLoadEvent = {
      first: 0,
      rows: this.fTable?.rows,
      sortField: null,
      sortOrder: null,
      filters: {
        Name: [
          {
            value: data,
            matchMode: "=*",
            operator: "and",
          },
        ],
      },
    };
    this.NextPage(event);
  }

  ClearSearch() {
    this.SetDefaultQuery();
    this.ResetTable();
    this.LoadData();
  }

  ResetTable() {
    if (this.fTable) {
      this.fTable.clearFilterValues();
      this.fTable.saveState();
    }
  }

  onRowEditInit(data: any) { // Replace `any` with appropriate type when possible
    this.ClonedLineData[data.Id] = { ...data };
  }

  onRowEditSave(index: number, data: any) { // Replace `any` with appropriate type when possible
    // Implement your update logic here
  }

  onRowEditCancel(data: any, index: number) { // Replace `any` with appropriate type when possible
    this.PagingSignal.update((res) => {
      const newContent = [...res.Content];
      newContent[index] = this.ClonedLineData[data.Id];
      return { ...res, Content: newContent };
    });
    delete this.ClonedLineData[data.Id];
  }

  Delete(event: any, data: any) { // Replace `any` with appropriate type when possible
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure to delete?',
      icon: 'pi pi-exclamation-triangle',
      dismissableMask: true,
      accept: () => {
        // Implement delete logic here
      },
    });
  }

  NextPage(event: TableLazyLoadEvent) {
    if ((event?.first || event?.first === 0) && event?.rows) {
      this.Query.Page = event.first / event.rows + 1 || 1;
      this.Query.PageSize = event.rows;
    }
    const sortText = BuildSortText(event);
    this.Query.OrderBy = sortText === '' ? this.DEFAULT_ORDER : sortText;
    const filtered = BuildFilterText(event);
    if (filtered === '') this.ResetTable();
    else this.Query.Filter = BuildFilterText(event);
    this.LoadData();
  }
}
