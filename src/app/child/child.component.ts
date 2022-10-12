import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private service:MasterService) { 
    this.listarray=this.service.GetData();
  }
  @Input() namedata: any;
  @Input() markdata: any;
  @Input() objdata: any;
  @Output() dataupdateevent=new EventEmitter<string>();
  listarray = [{ "name": "ravi", "mark": "75" }]
  channelname='';

  updateList(obj:any){
    this.listarray.push(obj);
    return obj.name+ " is added";
  }


  ngOnInit(): void {
    this.channelname=sessionStorage.getItem('name')!;
  }

}
