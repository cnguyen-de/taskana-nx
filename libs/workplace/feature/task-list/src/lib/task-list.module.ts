import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: TaskListComponent }])],
  declarations: [TaskListComponent],
  exports: [TaskListComponent]
})
export class TaskListModule {}
