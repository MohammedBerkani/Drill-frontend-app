export class Project {
  
    _id?:string;
    supervisorID?:string;
    supervised?:boolean;
    number?:number;
    determinedTime?:string;
   basic_info?:{
    contractor?:string,
    cellarDepth?:number,
    wellProfile?:string,
    targetReservoir?:string,    
    targetFormation?:string,
    targetToleranceShape?:string,  
    TdFormationDepth?:string,
    SurfaceLontitude?:number,
    SurfaceLatitude?:number,
      
};


}
