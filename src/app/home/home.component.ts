import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(  private route: ActivatedRoute,) { 


  }

  ngOnInit() {


  }


  showMore(){
    document.getElementById('res').style.width = '105%';
    document.getElementById('wsm').style.display ='none';
    document.getElementById('brs').style.display ='none';
    document.getElementById('Content').style.margin ='10px 0 0 0';
    document.getElementById('b2rs').style.display ='block';
    document.getElementById('post-block').style.padding ='0px 5.4vw 2vw 0px';
    document.getElementById('One').style.height='90%';
    document.getElementById('One').style.margin='10px 0 8px 40px';
    document.getElementById('show-at').style.display ='block';

      }
      
  showLess(){
    document.getElementById('res').style.width = '65%';
    document.getElementById('wsm').style.display ='block';
    document.getElementById('brs').style.display ='block';
    document.getElementById('Content').style.margin ='10px 2vw 0 2vw';
    document.getElementById('b2rs').style.display ='none';
    document.getElementById('post-block').style.padding ='unset';
    document.getElementById('One').style.height='97%';
    document.getElementById('One').style.margin='10px 2vw 0 2vw';
    document.getElementById('show-at').style.display ='none';

      }
  
  Shw(){

    }
}
