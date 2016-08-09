import {provide}     from 'angular2/core';
import {HeroService} from './heroes/hero.service';
import {Logger}      from './heroes/logger.service';
import {UserService} from './user.service';

let heroServiceFactory = (logger: Logger, userService: UserService) => {
	return new HeroService(logger, userService.user.isAuthorized);
}

export let heroServiceProvider =
	provide(HeroService, {
		useFactory: heroServiceFactory,
		deps: [Logger, UserService]
	});