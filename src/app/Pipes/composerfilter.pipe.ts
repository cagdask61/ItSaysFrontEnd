import { Pipe, PipeTransform } from '@angular/core';
import { Composer } from '../Models/ComposerModel/composer';

@Pipe({
  name: 'composerfilter'
})
export class ComposerfilterPipe implements PipeTransform {

  transform(value: Composer[], filterTextComposer: string): Composer[] {
    filterTextComposer = filterTextComposer ? filterTextComposer.toLocaleLowerCase():""
    return filterTextComposer ? value.filter((co:Composer)=>co.firstName.toLocaleLowerCase().indexOf(filterTextComposer)!==-1):value;
  }

}
