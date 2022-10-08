
export const getTheValue = (params: any, colName: string, emptyDispalyName: string) => {
    if (!(params.node && params.node.group)) {
        return params.data[colName] ? params.data[colName] : emptyDispalyName;
    }
}

export const getAggSumFunc = (parmas: any, emptyDispayName: string) => {
    let sum: any = 0;

    const  emptyArr=parmas.values.filter((item:any)=>item===emptyDispayName);
    const  hasValArr=parmas.values.filter((item:any)=>item!=emptyDispayName);
    if(hasValArr.length===0){
        sum=emptyDispayName;
    }else{
        hasValArr.map((item:any)=>sum+=item);
    }
  
    console.log(sum)
      // is a trick to get the default cellRenderer to display the value
    return sum
}


export const getCellRenderValue=(parmas:any,displayName:string)=>{

   return parmas.value?parmas.value:displayName
}





export const selectProductMap={
    'account':1,
    "product":2,
    "market":3
}


