import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams, Router} from 'angular2/router';
import {CardMember} from '../../model/card-member';
import {BoardService} from '../service/board-service';
import {OffClickDirective} from './off-click.directive';


@Component({
  selector: 'list-work-item',
  templateUrl: 'app/typescript/component/boards/board-list-details-item.component.html',
  styleUrls: ['app/typescript/component/boards/board-list-details-item.component.css'],
  providers: [FORM_DIRECTIVES, BoardService],
  directives: [ROUTER_DIRECTIVES, OffClickDirective],
  inputs: ['cardId']
})

export class BoardListItemComponent implements OnInit {
  private openActive: boolean = false;
  private cardMembers: CardMember[];
  private cardMemberItems: CardMember[];
  private boardId: number;
  private cardId: string;
  private cardMember: string;
  private cardMembersId: string;
  @Output() memberSelect = new EventEmitter();

  constructor(private _boardService: BoardService, private _router: Router, private _params: RouteParams) {
    this.clickedOutside = this.clickedOutside.bind(this);
    this.boardId = parseInt(_params.get('id'));

    let persistedCardMember = JSON.parse(localStorage.getItem('list-work') || '[]');
    console.log("persistedCardMember", persistedCardMember);
    this.cardMembers = persistedCardMember.map((cardMember: { name: string, memberId: number, card_id: number }) => {
    let ret = new CardMember(cardMember.name, cardMember.memberId, cardMember.card_id);
      return ret;
    });
  }

  ngOnInit() {
    this._boardService.getMemberCards().then(cardMemberItems => this.cardMemberItems = cardMemberItems);
  }

  private updateStore() {
    localStorage.setItem('list-work', JSON.stringify(this.cardMembers));
  }

  onSave(value: string, memberId: number, card_id: number) {
    card_id = parseInt(this.cardId.toString());
    memberId = parseInt(this.cardMembers.length.toString()) + 1;
    if ((value['name'] != "") && (value['name'] != undefined)) {
      this.cardMembers.push(new CardMember(value['name'], memberId, card_id));
      this.updateStore();
      this.cardMember= '';
    } else {
      return;
    }
  }

  onAdd() {
    this.openActive = true;
  }

  clickedOutside() {
    this.openActive = false;
  }

  createComment(cardMemberId: string) {
    this.memberSelect.emit({
      value: cardMemberId
    })
  }
}
