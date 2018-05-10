import { PostsInterface } from './../posts.interface';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../shared/resources.service';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: [ './post-list.component.scss' ]
})
export class PostListComponent implements OnInit {
	urlPost = 'https://jsonplaceholder.typicode.com/posts';
	posts$: Observable<PostsInterface[]>;

	constructor(private resourcesService: ResourcesService) {
		this.posts$ = resourcesService.getResource<PostsInterface>(this.urlPost, 'title');
	}

	ngOnInit() {}
}
