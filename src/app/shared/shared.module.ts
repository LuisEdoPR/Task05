import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesService } from './resources.service';
import { CardComponent } from './card/card.component';

@NgModule({
	imports: [ CommonModule ],
	declarations: [ CardComponent ],
	providers: [ ResourcesService ],
	exports: [ CommonModule, CardComponent ]
})
export class SharedModule {}
