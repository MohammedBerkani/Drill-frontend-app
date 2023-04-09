export class ProjectStages {
    projectId:string;
     stages:{
         finalProgress:number,
     stageN1:{
         casing:{
             weight:number,
             grade:string,
     state:{
         type: string,
     enum: ['pending', 'completed'] ,
      },
     },
     cementing:{
     
         state:{
             type: string,
             enum: ['pending', 'completed'] ,
              },
           
     },
     section:{
         ConductorHoleSize:number,
         
     
         finalDepth:number,
         depthInProgress:number,}
     },
     stageN2:{
         casing:{
             weight:number,
             grade:string,
             state:{
                 type: string,
             enum: ['pending', 'completed'] ,
              },
             },
             cementing:{
     
                 state:{
                     type: string,
                     enum: ['pending', 'completed'] ,
                      },
                   
             },
     section:{
         surfaceHallSize:number,
         
         finalDepth:number,
         depthInProgress:number,
     }
        
     },
     stageN3:{
         casing:{
             weight:number,
             grade:string,
     
             state:{
                 type: string,
             enum: ['pending', 'completed'] ,
              },
             },
             cementing:{
     
                 state:{
                     type: String,
                     enum: ['pending', 'completed'] ,
                      },
                   
             },
             section:{
                 itermediateHallSize:number,
     
         finalDepth:number,
         depthInProgress:number,
     }
     },
     stageN4:{
         casing:{
     weight:number,
             grade:string,
             state:{
                 type: string,
             enum: ['pending', 'completed'] ,
              },
             },
     section:{    
         productionHallSize:number,
     
         finalDepth:number,
         depthInProgress:number,
     }},
        }
 
 
 
 
 
 
 
 }
 
 
 
 
 
