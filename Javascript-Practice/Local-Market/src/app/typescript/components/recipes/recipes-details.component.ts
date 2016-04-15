import { Component, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router } from 'angular2/router';
import { RecipesService } from '../../service/service.component';
import { Recipe } from './recipes';

@Component({
  selector: 'recipe-detail',
  templateUrl: 'app/typescript/components/recipes/recipes-details.component.html',
  styleUrls: ['app/typescript/components/recipes/recipes-details.component.css'],
  providers: [ RecipesService ],
  directives: [ ]
})

export class RecipesDetailsComponent implements OnInit {
  @Input()
  recipe: Recipe;
  errorMessage: string;

  id: string;
  condition = 'close';
  constructor( private _recipesService: RecipesService, params: RouteParams ) {
    this.id = params.get('id');
  }

  ngOnInit() {
    this.getRecipeItem();
  }



  getRecipeItem() {
    this._recipesService.getRecipeItem(this.id).subscribe(
      recipe => {
        this.recipe = recipe;
        console.log("this.recipe", this.recipe);
      },
      error => this.errorMessage = <any>error);
  }
  goBack() {
    window.history.back();
  }
}
