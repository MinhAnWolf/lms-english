import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() item: any;
  @Input() routing: any;

  constructor() { }

  ngOnInit(): void {

  }

  getBackgroupImg(index: number): any{
    var backgroupImgs = [
      "140deg,#f13c36,#4c00ff 100%",
      "140deg,#00f7ff,#0044ff 100%",
      "140deg,#fdec00,#ff7300 100%",
      "140deg,#10a302,#b0f172 100%",
      "140deg,#445bda,#00a2b8 100%"
    ]
    return backgroupImgs[index];
  }

}
