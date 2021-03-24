import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../Models/CategoryModel/category';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(value: Category[], filterTextCategory: string): Category[] {
    filterTextCategory = filterTextCategory ? filterTextCategory.toLocaleLowerCase():""
    return filterTextCategory ? value.filter((c:Category)=>c.categoryName.toLocaleLowerCase().indexOf(filterTextCategory)!==-1):value;
  }

}
