import { Component, OnInit,ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MasterService } from '../service/master.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
  }

  title = 'angulartest';
  @ViewChild(ChildComponent) viewdata !: ChildComponent;
  constructor(private service: MasterService) {
    sessionStorage.setItem('name', 'Nihira Techiees')!;

    this.service.GetEmployee().subscribe(resp => {
      this.empdata = resp;
    });
    this.service.GetCustomer().subscribe(resp => {
      this.customerdata = resp;
    });
  }
  inputname = '';
  inputmark = '';
  inputobj = { "name": "", "mark": "" };
  response: any

  empdata: any;
  customerdata:any;

  TransferData(name: any, mark: any) {
    this.inputname = name;
    this.inputmark = mark;
    this.inputobj = { "name": name, "mark": mark };
    // this.response= this.viewdata.updateList(this.inputobj);
    this.service.SaveData(this.inputobj);
  }
  updatetitle(title: any) {
    this.title = title;
  }

}
