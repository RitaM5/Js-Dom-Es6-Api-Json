

function trivujArea(width1,width2,width3){
    var S = (width1 + width2 + width3) / 2 ;
    var area =Math.round( Math.sqrt(S * ((S - width1) * (S - width2) * (S - width3))));
    return area;
}
var result = trivujArea(12,7,6);
console.log(result);