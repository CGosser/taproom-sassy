export class Keg {
  public volume: number = 128;
  public editable: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public abv: number) {}

  pullPint() {
    this.volume--
  }

  toggleEdit(currentKeg) {
    if (this.editable !== true) {
      this.editable = true;
    } else {
      this.editable = false;
    }
  }
}
