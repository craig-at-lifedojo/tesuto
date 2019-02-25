  export const transformCards = function(data){
    let tdata = []
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        let data2 = data[key]
        for (var key2 in data2) {
          if (data2.hasOwnProperty(key2)) {
            let type = key2
            for(var i=0;i<data2[key2].length;i++){
              let obj = data2[key2][i]
              obj['type'] = type
              tdata.push(obj)
            }
          }
        }
      }
    }
    return tdata.sort(compareDisplayOrder)
  }

  const compareDisplayOrder = function(a,b) {
    if (a.display_order < b.display_order)
      return -1;
    if (a.display_order > b.display_order)
      return 1;
    return 0;
  }
