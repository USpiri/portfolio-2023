import { NgModule } from '@angular/core';
import { ServerErrorComponent } from './server-error/server-error.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatIconModule, MatCardModule],
  declarations: [ServerErrorComponent],
  exports: [ServerErrorComponent],
})
export class ComponentsModule {}
