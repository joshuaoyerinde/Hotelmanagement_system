import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStaffs'
})
export class FilterStaffsPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(staffres,staffreq){
    if(staffreq){
      console.log(staffreq)
      console.log(staffres)
      let tlower = staffreq.toLowerCase();
      let staff = staffres.filter(e =>e.first_name.toLowerCase().includes(tlower));
      return staff;
    }
    return staffres;
  }

}
