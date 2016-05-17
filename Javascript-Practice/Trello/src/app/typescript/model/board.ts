export class Board {
  private name: string;
  private id: number;
  start: boolean;

  get _id() {
    return this.name;
  }
  set _id(value: string) {
    this.name = value;
  }

  get title() {
    return this.name;
  }
  set title(value: string) {
    this.name = value;
  }

  constructor(title: string, _id: number) {
    this.title = title;
    this.id = _id;
    this.start = false;
  }
}
