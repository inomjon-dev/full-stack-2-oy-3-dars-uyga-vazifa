// 1-masala.
let n = 20;
for(i=1;i<=n;i++){
    console.log(i)
}
// 2-masala.
let x = 20;
for(i=x;i>=1;i--){
    console.log(i)
}
// 3-masala.
for(i=1;i<=50;i++){
    if(i%5==0){
        console.log(i)
    }
}
// 4-masala.
for(i=1;i<=30;i++){
    if(i%3==0){
        console.log(i)
    }
}
// 5-masala.
for(i=1;i<=100;i++){
    if(i%10==0){
        console.log(i)
    }
}
// 6-masala.
let S=0;
for(i=1;i<=20;i++){
    S+=i;
}
console.log(S)
// 7-masala.
let count=0;
for(i=1;i<=50;i++){
    if(i%5==0){
        count+=i;
    }
}
console.log(count);
// 8-masala.
let sum=0;
for(i=1;i<=100;i++){
    if(i%3==0){
        sum+=i;
    }
}
console.log(sum)
// 9-masala.
let y = 0;
for(i=1;i<=20;i++){
    if(i%2==0){
        y+=i;
    }
}
console.log(y);
// 10-masala.
let z = 0;
for(i=1;i<=30;i++){
    if(i%2!=0){
        z+=i;
    }
}
console.log(z);
// 11-masala.
let num=0;
for(i=1;i<=200;i++){
    if(i%5==0){
        num++;
    }
}
console.log(num)
// 12-masala.
let number=0;
for(i=1;i<=100;i++){
    if(i%5==0 && i%3==0){
        number++;
    }
}
console.log(number)
// 13-masala.
let numb=0;
for(i=1;i<=100;i++){
    if(i%7==0){
        numb++;
    }
}
console.log(numb)
// 14-masala.
let sumjuft=0;
let sumtoq=0;
for(i=1;i<=100;i++){
    if(i%2==0){
        sumjuft+=i;
    }
    else{
        sumtoq+=i;
    }
}
console.log(sumjuft-sumtoq);
// 15-masala.
let bolinadi=0;
let bolinmaydi=0;
for(i=1;i<=100;i++){
    if(i%3==0){
        bolinadi++;
    }
    else{
        bolinmaydi++;
    }
}
console.log(`3 ga bo'linadi: ${bolinadi} ta.  bo'linmaydi: ${bolinmaydi} ta.`);
// 16-masala.
//let fn=+prompt("Iltimos_son_kiriting")
fn=10;
if(fn>0){
    for(i=fn;i>=1;i--){
    console.log(i);
}
}
else{
    console.log("Musbat son kiriting");
}
// 17--masala.
//let sonf=+prompt("Iltimos son kiriting")
sonf=10;
for(i=1;i<=sonf;i++){
    if(i%2==0){
        console.log(i)
    }
}
//18-masala.
//let sonfs=+prompt("Iltimos son kiriting")
sonfs=10;
let toqsum=0;
for(i=1;i<=sonfs;i++){
    if(i%2!=0){
        toqsum+=i
    }
}
console.log(toqsum)
// 19-masala.
//let sonkarra=+prompt("Iltimos son kiriting")
sonkarra=5;
for(i=1;i<=10;i++){
    console.log(i*sonkarra)
}
// 20-masala.
//let sontup=+prompt("Iltimos son kiriting")
sontup=17;
if(sontup<2){
    console.log(`${sontup}: tup`);
    
}
else{
    for(i=2;i<=sontup-1;i++){
    if(sontup%i==0) {
        console.log(`${sontup}:tup emas.`);break;
    } 
    else {
        console.log(`${sontup}:tup.`);break;
    }
    
}
}