var budget = 8000 ;
if(budget>5000){
    console.log('yeah,tour dibo');

    //jehutu ami tour dibo tahole porer hiseb akhanei korte hobe
    var hotelCost = 4000 ;
    var extra = budget - hotelCost ;
    console.log(extra);

    if(extra>2000){
        console.log('barbiqu party dibo');
    }
    else{
        console.log('shopping krbo');
    }
}
else{
    console.log('nah ghum dibo');
}