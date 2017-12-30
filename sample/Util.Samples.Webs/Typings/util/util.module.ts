﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatPaginatorModule } from '@angular/material';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';
import { TableWrapperComponent } from './material/table-wrapper.component';

/**
 * Util模块
 */
@NgModule({
    imports: [CommonModule, MatProgressSpinnerModule, MatPaginatorModule],
    declarations: [TableWrapperComponent],
    exports: [TableWrapperComponent],
    providers: [
        MessageService, ConfirmationService
    ]
})
export class UtilModule {
}