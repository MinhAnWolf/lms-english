import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitService } from 'src/app/core/services/unitService';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  units: any = [];
  routing = "lesson";
  ids: any;

  constructor(
    private unitService: UnitService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ids = this.route.snapshot.queryParamMap.get("ids");
    var idb = this.route.snapshot.queryParamMap.get("idb");
    var json = {bookId: idb};
    this.unitService.getAll(json).subscribe(res => {
      this.units = res.data;
    })
  }

}
