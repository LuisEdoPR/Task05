import { SharedModule } from './shared/shared.module';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent, PostListComponent, CommentListComponent ],
	imports: [ BrowserModule, HttpClientModule, SharedModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
