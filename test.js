var numbers =  [1,2,3,4,5,6,-1,9,7,5,4,-9];

var sochan = numbers.filter(myFunction);
console.log("Cac so chan la: " + sochan);
function myFunction(value) {
  return value%2==0;//Trả về giá trị là số chẵn
}

var soam = numbers.filter(myFunction1);
console.log("Cac so am la: " + soam);
function myFunction1(value) {
  return value < 0;//Trả về giá trị là số âm
}

var soduong = numbers.filter(myFunction2);
console.log("Cac so duong la: " + soduong);
function myFunction2(value) {
  return value > 0;//Trả về giá trị là số dương
}

var sole = numbers.filter(myFunction3);
console.log("Cac so le la: " + sole);
function myFunction3(value) {
  return value%2==1;//Trả về giá trị là số lẻ
}

text = "toong";
console.log("Chuoi la: " + text)
mang = text.split("",5)
// Đảo ngược vị trí của các phần tử
mang.reverse();
console.log("Chuoi sau khi đảo lại la: " + mang.join(''));


var so = [1,7,32,4,5];
console.log("Mang la: " + so)
so.sort(function(a, b){return b-a});
console.log("Phan tu lon thu 2 cua mang la: " + so[1]);