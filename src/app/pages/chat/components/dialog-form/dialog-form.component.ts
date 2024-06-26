import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDialogForm } from '@pages/chat/interfaces/IDialogForm';
import { IDialogFormData } from '@pages/chat/interfaces/IDialogFormData';
import { ChatUiActions } from '@pages/chat/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogFormComponent implements OnInit {
  public form: FormGroup<IDialogForm>;

  constructor(private fb: FormBuilder, private store: Store, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      message: this.fb.control<string | null>(null, []),
    });
  }

  submitHandler(event: Event): void {
    event.preventDefault();
    const { message } = this.form.value;

    if (this.form.invalid || !message) return;

    const formData: IDialogFormData = {
      text: message,
    };

    this.store.dispatch(ChatUiActions.submitMessage({ formData }));

    this.form.reset();
  }
}
