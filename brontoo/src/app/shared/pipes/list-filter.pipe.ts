import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'listfilter',
  pure: false
})
export class ListFilterPipe implements PipeTransform {
  transform(filter: any, filterBy: string) {
    var filtered: string[] =[];
    if(filterBy === null || filterBy.length == 0)
    {
      return filtered;
    }
    filter.forEach((value) => {
      if(value.toLowerCase().startsWith(filterBy.toLowerCase()))
        filtered.push(value);
    });
    if(filtered.length == 0){
      filtered.push('No data found');
    }
    return filtered;
  }
}
