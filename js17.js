console.log('Зробіть 1 і 2 рівень цього задачника (з рівень 1.1 по 2.10 включно): https://code.mu/ru/javascript/tasker/stager/');
console.log('Рівень 1 і все що там');
let a = 20;
if(a > 0) {
    console.log('не отрицательное');
} else {
    console.log('отрицательное');
}
let a1 = 'hello';
console.log('довжина строки', a1.length);
console.log(a1.length-1);
if(a % 2==0) {
    console.log('парне');
} else {
    console.log('не парне');
}
let a2 = 'work';
if (a1[0] === a2[0]) {
    console.log('перші літери совадають');
} else {
    console.log('не совпадають');
}
let a3 = a1[a1.length-1];
if(a3 === 'ь') {
   a3 = a1[a1.length-2];
} console.log(a3);
let a4 = a1.toString() [0];
console.log(a4);
let a5 = a % 10;
console.log(a5);
let a6 = a.toString() [0] + a % 10;
console.log(a6);
let a7 = a.toString().length;
console.log(a7);
let a8 = 5;
if(a.toString()[0] === a8.toString()[0]) {
    console.log('співпадають');   
} else {
    console.log('не співпадають');
};
if(a1.length > 1) {
    console.log(a1[a1.length - 2]);
} else {
    console.log(a1);
};
if(a !==0 && a % a8 === 0) {
    console.log('ділиться');
} else {
    console.log('не ділиться');
};
for(let i = 1; i <= 100; i++) {
    console.log(i);
};
for (let i = -100; i <= 0; i++) {
    console.log(i); 
};
for (let i = 100; i >= 1; i--) {
    console.log(i);
};
for(let i = 2; i <= 100; i +=2) {
    console.log(i);
};
for(let i = 3; i <= 100; i +=3) {
    console.log(i);
};
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
let sum1 = 0;
for (let i = 2; i <= 100; i += 2) {
    sum1 += i;
}
console.log(sum1);
let sum2 = 0;
for (let i = 1; i <= 100; i += 2) {
    sum2 += i;
}
console.log(sum2);
let num1 = 10;
let num2 = 3; 
let ostatok = num1 % num2;
console.log(ostatok);
for (let i = a1.length - 1; i >= 0; i--) {
    console.log(a1[i]);
}
const arr = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < arr.length; i++) {
    suma += arr[i] ** 2;  
}
console.log(suma); 
let sumCvadrat = arr.map(Math.sqrt).reduce((sum, num) => sum + num, 0);
console.log(sumCvadrat);
let filt = arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
console.log(filt);
let sumFil = arr.filter(num => num > 0 && num < 10).reduce((sum, num) => sum + num, 0);
console.log(sumFil);
let b = 'abcde';
let b1 = b.split('');
console.log(b1);
let b2 = 12345;
let b3 = b2.toString().split('').map(Number);
console.log(b3);
let b4 = b2.toString().split('').reverse().join('')
console.log(b4);
let b5 = b2.toString().split('').map(Number).reduce((sum, num) => sum + num, 0);
console.log(b5);
let arr1 = [];
for (let i = 1; i <= 10; i++) {
  arr1.push(i);
}
console.log(arr1); 
let arr2 = [];
for (let i = 2; i <= 100; i += 2) {
  arr2.push(i);
}
console.log(arr2); 
let arr3 = [1.456, 2.125, 3.32, 4.1, 5.34];
let arr4 = arr3.map(num => Math.round(num * 10) / 10);
console.log(arr4);
let arr5 = [
    "http://helo",
    "https://jj",
    "fdfdf",
    "fhghhh",
  ];
let filtar = arr5.filter(str => str.startsWith("http://"));
console.log(filtar);
let arr6 = [
    "ffdf",
    "work.html",
    "sssff",
    "gggeew",
    "sddf"
  ];
let filtar1 = arr6.filter(str => str.endsWith(".html"));
console.log(filtar1);
let arr7 = [1, 2, 4, 5];
let proc = arr7.map(num => num * 1.10);
console.log(proc);
let b6 = b2.toString().split('').reverse().map(Number).join('')
console.log(b6);
let arr8 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr8.length - 1; i++) {
    console.log(arr8.slice(i, i + 2));
  }
let arr9 = [1, 2, 3];
let arr10 = [4, 5, 6];
let arr11 = arr9.concat(arr10);
console.log(arr11);
console.log('Рівень 2 і все що там');
let c = '230';
console.log(c.indexOf('0'));
for (let num = 10; num < 1000; num++) {
    let str = num.toString();
    if (str.length > 1 && parseInt(str[0]) + parseInt(str[1]) === 5) {
      console.log(num);
    }
  }
let ar = [1, 2, 3, 4, 5, 6];
let delet = 3;
let index = ar.indexOf(delet);
if (index !== -1) {
  ar.splice(index, 1);
}
console.log(ar); 
let flo = Math.floor(ar.length / 2);
let first = ar.slice(0, flo);
let sumFirst = first.reduce((sum, num) => sum + num, 0);
console.log(sumFirst); 
let negative = ar.filter(num => num < 0);
console.log(negative); 
let positive = ar.filter(num => num > 0);
console.log(positive); 
let str = 'byebye';
let modifStr = str.slice(0, str.length - 2) + str.slice(str.length - 1);
console.log(modifStr);
let centr = Math.floor(ar.length / 2);
let fir = ar.slice(0, centr);
let sec = ar.slice(centr);
let sumFir = fir.reduce((sum, num) => sum + num, 0);
let sumSec = sec.reduce((sum, num) => sum + num, 0);
let res = sumFir / sumSec;
console.log(res);
    if (a[a.length - 1] === a2[0]) {
    console.log("Остання літера першого слова співпадає з першою останнього слова");
    } else {
    console.log("Не співпадає");
}
let str1 = "43002305";
let pos = -1;
let count = 0;
for (let i = 0; i < str1.length; i++) {
  if (str1[i] === '0') {
    count++;
    if (count === 3) {
      pos = i;
      break;
    }
  }
}
console.log(pos);
let str2 = '12,34,56';
let numbers = str2.split(',').map(num => parseInt(num));
let sum3 = numbers.reduce((total, num) => total + num, 0);
console.log(sum3);
const date = '2025-12-31';
const [year, month, day] = date.split('-');
const dateObj = {
    year: year,
    month: month,
    day: day
};
console.log(dateObj);
let str3 = 'hello123';
let dig = /\d/;
console.log(str3.match(dig).join(''));
const obj = {
    a: 1,
    b: 2,
    c: 3
};
const keys = Object.keys(obj); 
const values = Object.values(obj);  
console.log(keys);  
console.log(values); 
function evenNumber(number) {
let num = Math.abs(number).toString();
let count = 0;
for(let i = 0; i < num.length; i++) {
    let digit = parseInt(num[i], 10)
    if(digit % 2==0) {
        count++
    }
} console.log(count);
}
evenNumber(45612)
function uper(str) {
    let res = '';
    for(let i = 0; i < str.length; i++) {
        if(i % 2==0) {
            res += str[i].toUpperCase();
        } else {
            res += str[i].toLowerCase();
        }
    } return res;
}
let c1 = 'abcde';
let call = uper(c1);
console.log(call);
function oneLeter(str) {
    return str
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' '); 
}
let c2 = 'aaa bbb ccc';
let call1 = oneLeter(c2);
console.log(call1); 
function posZero(str) {
    let pos = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            pos.push(i);
        }
    }

    return pos;
}
let c3 = '023m0df0dfg0';
let call2 = posZero(c3);
console.log(call2); 
function deleteTree(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 3 !== 0) { 
            result += str[i];
        }
    }
    return result;
}
let c4 = 'abcdefg';
let call3 = deleteTree(c4);
console.log(call3); 
function divide(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) { // 
            evenSum += arr[i];
        } else { 
            oddSum += arr[i];
        }
    }
    if (oddSum === 0) {
        return 'Помилка';
    }
    return evenSum / oddSum;
}
let c5 = [1, 2, 3, 4, 5, 6];
let result = divide(c5);
console.log(result); 
function f1(str) {
    let pos = [];
    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) { 
            pos.push(i);
        }
    }
    return pos;
}
let str4 = "abc123def45";
let res1 = f1(str4);
console.log(res1); 
function reverseNumbers(arr) {
    return arr.map(num => {
        return parseInt(num.toString().split('').reverse().join(''), 10);
    });
}
let ar1 = [123, 456, 789];
let reversAr = reverseNumbers(ar1);
console.log(reversAr); 
function f2(number) {
    return number
        .split('')
        .reverse()
        .join('')
        .match(/.{1,3}/g)  
        .join(' ')        
        .split('')           
        .reverse()
        .join('');
}
let number = '1234567';
let formattedNumber = f2(number);
console.log(formattedNumber); 
function f3(str) {
    return str
        .split('')  
        .map(char => 
            char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        )  
        .join(''); 
}
let str5 = 'AbCdE';
let toggl = f3(str5);
console.log(toggl); 
function merge(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        let mergedNumber = parseInt(arr[i].toString() + arr[i + 1].toString(), 10);
        result.push(mergedNumber);
    }
    return result;
}
let ar2 = [1, 2, 3, 4, 5, 6];
let mergedArr = merge(ar2);
console.log(mergedArr); 
function f3(str) {
    let words = str.split(' ');  
    for (let i = 1; i < words.length; i += 2) {  
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return words.join(' '); 
}
let str6 = 'aaa bbb ccc eee fff';
let res2 = f3(str6);
console.log(res2);  
function f4(str) {
    let words = str.split(' '); 
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length <= 3) {
            words[i] = words[i].toUpperCase();
        }
    }
    return words.join(' ');  
}
let str7 = 'a bc def ghij';
let res3 = f4(str7);
console.log(res3); 
function f4(char) {
    if (char === char.toUpperCase()) {
        return 'Uppercase'; 
    } else if (char === char.toLowerCase()) {
        return 'Lowercase'; 
    } else {
        return 'Invalid input'; 
    }
}
let char = 'A';
console.log(f4(char));  
char = 'b';
console.log(f4(char));  
char = '1';
console.log(f4(char));  
function f5(num) {
    let numStr = num.toString();
    let resultStr = numStr.split('')
    .filter(digit => parseInt(digit) % 2 === 0).join('');
    return resultStr === '' ? 0 : parseInt(resultStr);
}
let num = 123789;
let res4 = f5(num);
console.log(res4); 
function f6(str) {
    let words = str.split(' ');
    let filteredWords = words.filter(word => word.length <= 3);
    return filteredWords.join(' ');
}
let st1 = '1 22 333 4444 22 5555 1';
let resu1 = f6(st1);
console.log(resu1); 
let ar11 = [1, 2, 3];
let ar12 = ['a', 'b', 'c'];
let resu2 = [...ar11.slice(0, 2), ...ar12, ...ar11.slice(2)];
console.log(resu2);  
function sumOfDigit(num) {
    let numStr = num.toString();
    let pairs = [];
    for (let i = 0; i < numStr.length; i += 2) {
        pairs.push(parseInt(numStr.slice(i, i + 2), 10));
    }
    return pairs.reduce((sum, pair) => sum + pair, 0);
}
let num11 = 123456;
let resu3 = sumOfDigit(num11);
console.log(resu3); 
let ar22 = [1, 2, 3, 4, 5];
ar22.reverse().forEach(element => console.log(element));
function f7(num) {
    let numStr = num.toString(); 
    for (let i = numStr.length - 1; i >= 0; i--) {
        let digit = parseInt(numStr[i]); 
        if (digit % 2 === 0) {  
            return digit;  
        }
    }
    return null;  
}
let num3 = 123456;
let resu4 = f7(num3);
console.log(resu4);  
function f8(str) {
    let words = str.split(' ');
    let modifiedWords = words.map(word => '!' + word.slice(1));
    return modifiedWords.join(' ');
}
let str8 = 'abcde abcde abcde';
let resu5 = f8(str8);
console.log(resu5); 
function f9(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            return true;  
        }
    }
    return false;  
}
let ar3 = [1, 2, 3, 3, 4, 5];
let ar4 = [1, 2, 3, 4, 5];
console.log(f9(ar3)); 
console.log(f9(ar4)); 