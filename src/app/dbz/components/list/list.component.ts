import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  onDeleteIndex: EventEmitter<string> = new EventEmitter();

  onDeleteId(id?: string):void {
    if (!id) return;
    this.onDeleteIndex.emit(id);
  }

  onDeleteCharacter(index: number):void{
    //TODO: Emitir el ID del personaj

    console.log(index);

  }
}
