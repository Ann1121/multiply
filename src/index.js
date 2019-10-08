module.exports = function multiply(first, second) {
let array = [];
for (let i=second.length-1; i>=0; i--) {
let string = '';
let ostatok=0;
for (let j=first.length-1; j>0; j--) {
string = (second[i]*first[j]+ostatok)%10 + string;
ostatok = Math.floor((second[i]*first[j]+ostatok)/10);
}
string=String(second[i]*first[0]+ostatok+string);
array.push(string);
}
console.log(array);
for (let i=1; i<array.length; i++) {
array[i]+= "0".repeat(i);
}
for (let i=0; i<array.length-1; i++) {
let number = array[array.length-1].length-array[i].length;
array[i] = "0".repeat(number) + array[i];
}
let result = '';
let ostatok=0;
for (let i=array[0].length-1; i>0; i--) {
let sum=0;
for (let j=0; j<array.length; j++) {
sum+=+array[j][i];
}
sum+=ostatok;
ostatok = (sum - sum % 10)/10;
result = String(sum%10 + result);
}
let sum=0;
for (let j=0; j<array.length; j++) {
sum+= +array[j][0];
}
sum += ostatok;
result=String(sum)+result;
return result;
}
