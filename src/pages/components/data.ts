const  getRandomNumber=(min: number, max: number)=>{
    return Math.round(min + Math.random() * (max - min));
}
const countries: string[] = ['USA', 'UK', 'France', 'Canada', 'Poland',
'Denmark', 'Croatia', 'Australia', 'Seychelles',
'Sweden', 'Germany', 'Japan', 'Ireland',
'Barbados', 'Jamaica', 'Cuba', 'Spain'];

const status: string[] = [ 'Packing', 'Shipped', 'Delivered']
const  getRandomItem=(array: any[])=> {
    const index = Math.round(getRandomNumber(0, array.length - 1));
    return array[index];
}
const getCountryFlag=(country: string)=>{

    const flag = 'https://static.infragistics.com/xplatform/images/flags/' + country + '.png'
    return flag;
}
export const getData=()=>{
    const sales:any[]=[];
    for(let i=0;i<30;i++){
        const price =getRandomNumber(10000, 90000) / 100;
        const items = getRandomNumber(4, 30);
        const value = Math.round(price * items);
        const margin = getRandomNumber(2, 5);
        const profit = Math.round((price * margin / 100) * items);
        const country = getRandomItem(countries);
        sales.push({
            Country: country,
            CountryFlag: getCountryFlag(country),
            Margin: margin,
            OrderItems: items,
            OrderValue: value,
            ProductID: 1001 + i,
            ProductPrice: price,
            Profit: Math.round(profit),
            Status:getRandomItem(status),
        });
    }
    return sales
}

export const getDayData=()=>{
    
}