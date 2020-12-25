import { Component } from '@angular/core';
import { planet } from './panet';
import { PlanetserviceService } from './planetservice.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'machstatz';
  selectitem;
  favid:string;
  favisfavorite:boolean;
  favname:string;
  planetlist:planet[];

  favoritelist:planet[]=[];
   


  constructor(private service:PlanetserviceService){}

  ngOnInit(): void {

    this.service.getdata().subscribe(data=>{this.planetlist=data});
  


}

seletfavorite(p1:planet,res,index){

  res.color="accent";
  let p=new planet();
  p.id=p1.id;
  p.isFavourite=p1.isFavourite;
  p.name=p1.name;

  this.favoritelist.push(p);
  
}

 
}
