import { CommentsInterface } from './../comments.interface';
import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../shared/resources.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-comment-list',
	templateUrl: './comment-list.component.html',
	styleUrls: [ './comment-list.component.scss' ]
})
export class CommentListComponent implements OnInit {
	urlComments = 'https://jsonplaceholder.typicode.com/comments';
	comments$: Observable<CommentsInterface[]>;

	constructor(private resourcesService: ResourcesService) {
		this.comments$ = resourcesService.getResource<CommentsInterface>(this.urlComments, 'body');
	}

	ngOnInit() {}
}
