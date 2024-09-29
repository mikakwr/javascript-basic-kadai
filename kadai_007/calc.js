let num =  43


//変数(num)が３の倍数の場合:"3の倍数です"
if (num % 3 === 0  && num % 5 !==0){
    console.log('3の倍数です');
}

//変数（num)が５の倍数の場合:"5の倍数です"
if (num % 5 === 0 && num % 3 !==0){
    console.log('5の倍数です');
}

//変数（num)が３と５の倍数の場合:"3と5の倍数です"
if (num % 3 === 0 && num % 5 === 0){
    console.log('3と5の倍数です');
}

//それ以外の場合:変数(num)を出力する
else {
    console.log(num)
}
