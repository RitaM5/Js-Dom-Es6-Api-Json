function getInterest(mainBalance,interestRate,year){
    let firstInterest = interestRate / 100 ;
    let finalAmount = (1 + (interest * year)) * mainBalance ;
    let interest = finalAmount - mainBalance ;
    return (interest) ;
}
var result = getInterest(10000,3,5);
console.log('the interest is', result);