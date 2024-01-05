import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  datas: any;

  constructor(private service: EquipeService) {}

  ngOnInit(): void {
    this.getequipe();
  }

  getequipe() {
    this.service.getallequipe().subscribe((res: any) => {
      this.datas = res; // Assignez les données à la propriété datas
      console.log(this.datas);
    });
  }
  getTeamMemberImage(data: any): string {
    // Implement your logic to determine the image source based on data
    // Example: assuming data has an 'image' property
    return data.image || 'default-image.jpg';
  }
}
