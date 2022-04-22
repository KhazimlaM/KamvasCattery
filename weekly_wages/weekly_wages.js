function weeklyWage(band, weeklyHours) {
 var bands = band.split(",")
 var hours = weeklyHours.split(",")
 
  for(var i=0; i<weeklyHours.length; ++i){
     if( weeklyHours < 7){
     return "missing days"
     }
     else if( weeklyHours === 7){
    return weeklyHours.length
     }
  }
};
