import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  public activated: boolean;

  constructor(
    private spin: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.spin.state.subscribe( state => {
      this.activated = state;
    })
  }

}
