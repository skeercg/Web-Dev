import { Component } from '@angular/core';
import {categories} from "../categories";
@Component({
  selector: 'app-category',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories = categories
}
