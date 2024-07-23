import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, DoCheck, OnChanges, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppService } from "../service/app.service";

//decorator annotation
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  providers: [HttpClient,AppService]
})

export class HeaderComponent implements OnInit{

  public header:any;

  //Dependency injection using javascript framework
  //Constructor Injection
  //Life Cycle event-triggeres only onetime
  constructor(private appService:AppService) {
    console.log("HeaderComponent");
  }

  //Life cycle hooks
  ngOnInit(): void {
    //call the loadCustomer() from service class
    this.appService.loadCustomerList({
      name:"Ravindu",
      age:24
    })
    console.log('ngOnInit');
  }

  //Life cycle hooks-can trigger multiple times
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  //Life cycle hooks
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

}
