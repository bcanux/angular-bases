    import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzServices } from '../services/dbz.service';

  @Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
  })

  export class MainPageComponent{
    constructor(private dbzServices: dbzServices){}

    get characters():Character[]{
      return[...this.dbzServices.characters]
    }

    onDeleteCharacters(id:string): void {
      this.dbzServices.deleteCharacterById(id);
    }

    onNewCharacter(character:Character):void {
      this.dbzServices.addCharacter(character);

    }
  }
