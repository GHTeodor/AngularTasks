import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  @Output() additionalContent = new EventEmitter;

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.form = new FormGroup({
      title: new FormControl("Additional content", [Validators.maxLength(64)])
    });
  }

  addContent(): void {
    if (!this.form.get("title")?.errors) {
      this.additionalContent.emit(this.form.get("title")?.value);
    }
  }
}
