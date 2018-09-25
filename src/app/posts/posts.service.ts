import { Post } from './post.model';
import { Injectable } from '@angular/core';

// Does the same thing as addiing sevice to app.module providers
// Injected srvice is a singleton
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    // return copy of array instead of reference
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
  }
}
