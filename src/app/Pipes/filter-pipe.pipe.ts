import { Pipe, PipeTransform } from '@angular/core';
import { ArticleDto } from '../Models/ArticleModel/articleDto';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: ArticleDto[], filterText: string): ArticleDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase():""
    return filterText?value.filter((a:ArticleDto) =>a.title.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
