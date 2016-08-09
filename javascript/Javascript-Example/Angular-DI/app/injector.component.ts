import {Component, Injector}  from 'angular2/core';

import {Car, Engine, Tires}   from './car/car';
import {HeroService}          from './heroes/hero.service';
import {heroServiceProvider}  from './heroes/hero.service.provider';
import {Logger}               from './heroes/logger.service';

@Component({
	selector: 'my-injectors',
	template: `
	<h2>Other Injections</h2>
	<div id="car">{{car.drive()}}</div>
	<div id="hero">{{hero.name}}</div>
	<div id="rodent">{{rodent}}</div>
	`,
	providers: [Car, Engine, Tires,
							heroServiceProvider, Logger]
})
export class InjectorComponent {
	constructor(private _injector: Injector) { }

	car:Car = this._injector.get(Car);

	heroService:HeroService = this._injector.get(HeroService);
	hero = this.heroService.getHeroes()[0];

	get rodent() {
		let rous = this._injector.getOptional(ROUS);
		if (rous) {
			throw new Error('Aaaargh!')
		}
		return "R.O.U.S.'s? I don't think they exist!";
	}
}

class ROUS { }
