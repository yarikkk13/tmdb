import {Component, OnInit} from '@angular/core';
import {DemoService} from "../../services/demo.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private demoService: DemoService) {
  }

  ngOnInit(): void {
    this.demoService.getDemo()
      .subscribe(value => {
        console.log(value.page)
        console.log(value.results)
      })

  }

}
