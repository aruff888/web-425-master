import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

export interface Guild {
  guildName: string;
  description: string;
  type: string;
  acceptTerms: boolean;
  notificationPreference: string;
}

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-guild.component.html',
  styleUrls: ['./create-guild.component.css']
})
export class CreateGuildComponent {
  guilds: Guild[] = [];

  guildForm = this.fb.group({
    guildName: ['', Validators.required],
    description: ['', Validators.required],
    type: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue],
    notificationPreference: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.guildForm.invalid) {
      this.guildForm.markAllAsTouched();
      return;
    }

    this.guilds.push(this.guildForm.value as Guild);
    this.guildForm.reset({
      guildName: '',
      description: '',
      type: '',
      acceptTerms: false,
      notificationPreference: ''
    });
  }
}
