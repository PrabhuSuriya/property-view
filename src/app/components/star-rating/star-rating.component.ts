import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'pv-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarRatingComponent {
  @Input() rating!: number;
  @Input() showTooltip = true;
}
