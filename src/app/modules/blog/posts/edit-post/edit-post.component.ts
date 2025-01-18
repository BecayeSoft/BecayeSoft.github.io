import { Component, OnInit } from '@angular/core';
import { AVATAR } from 'src/global';

declare var tinymce: any

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  avatar = AVATAR

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Updates the post
   */
  onUpdate() {
    let content = tinymce.activeEditor.getContent();
    console.log(content)
  }
}
