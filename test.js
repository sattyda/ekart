// // console.log( maskString("1234567887654321" , 4 , 12 , "X"  ) );
//
// function maskString( str , startLength , endLength, replaceCharacter){
//     var tmp = "";
//
//     for( var i = 0; i < str.length; i++ ){
//
//         if( i >= (startLength) && i < endLength){
//             tmp = tmp + replaceCharacter;
//         } else {
//             tmp = tmp + str[i];
//         }
//     }
//
//     return tmp;
// }
//
// var listofcharacters = [  "a" ,"D" , "3" , "t" ," " , "4" , "S" , "G"];
//
// console.log(mysort());
//
// function sortChar(){
//
//     var counter = 0;
//
//     var sort = false;
//     while(!sort) {
//         sort = true;
//
//         ///  [  "c" , "b" ,"h" , "c" ,  "A" , "A"]
//         for(var i = 1; i<listofcharacters.length; i+=1){
//             if(listofcharacters[i-1]>listofcharacters[i]){
//                 sort = false;
//                 var temp = listofcharacters[i-1];
//                 listofcharacters[i-1] = listofcharacters[i];
//                 listofcharacters[i] = temp;
//             }
//             counter++;
//         }
//
//      /// [  "b" , "c" ,"h" , "c" ,  "A" , "A"]  == 1st iteration
//      /// [  "b" , "c" ,"h" , "c" ,  "A" , "A"]  == 2 iteration
//      /// [  "b" , "c" ,"c" , "h" ,  "A" , "A"]  == 3 iteration
//      /// [  "b" , "c" ,"c" , "A" ,  "h" , "A"]   == 4 iteration
//      ///  [  "b" , "c" ,"c" , "A" ,  "A" , "h"] == 5 iteration
//     }
//
//
//     console.log(counter);
//
//     return listofcharacters;
// }
//
//
// function mysort(){
//
//     var counter = 0;
//
//     for(var i = 1; i<listofcharacters.length; i+=1){
//         for(var j = i; j<listofcharacters.length; j+=1){
//             if(listofcharacters[i-1]>listofcharacters[j]){
//
//                 var temp = listofcharacters[i-1];
//                 listofcharacters[i-1] = listofcharacters[j];
//                 listofcharacters[j] = temp;
//             }
//             counter++;
//         }
//     }
//
//     console.log(counter);
//     return listofcharacters;
// }


// console.log( factorial(5) ) ;
//
// function factorial( n){
//     if( n == 1){
//         return 1;
//     }
//
//     return n * factorial(n-1);
// }

/// fibonacii series ///


// for( var i = 0; i < n; i++  ){
//    for(var j = 0; j < n; j++){
//
//    }
// }

//
// var numbers = [1 , 7 , 9 , 11 ,12];
//
//
// for( var j = 13; j < 10000000; j= j + 3){
//     numbers.push( j  )
// }
//
// var searchKey = 2;
//
// var exist = false;
//
//
// var counter = 0;
//
// console.log( new Date().getMilliseconds());

// for( var i = 0; i < numbers.length ; i++ ){
//     counter++;
//     if( numbers[i] === searchKey ){
//         exist = true;
//         break;
//     }
// }

// var start = 0;
// var end = numbers.length - 1;

// while (end - start > 1 ) {
//     counter++;
//
//     if(searchKey === numbers[start]){
//         console.log(exist);
//         break;
//     }
//
//     if(searchKey === numbers[end]){
//         console.log(exist);
//         break;
//     }
//
//     var mid = parseInt((end - start)/2);
//
//     if( numbers[mid] === searchKey  ){
//         console.log(exist);
//         break;
//     } else if( numbers[mid] > searchKey  ){
//         end = mid;
//     } if( numbers[mid] < searchKey  ){
//         start = mid;
//     }
// }

// console.log( "counter:"  +counter);
// console.log(exist);
//
// console.log( new Date().getMilliseconds());
//
// // =  1  => N ==> log(n)
//
// function fibonacci( n ){
//     if( n <2 ){
//         return n;
//     }
//
//     return fibonacci(n-1) + fibonacci(n-2);
// }

var date = new Date();

var tomorrow = new Date( )/1 + 24*60*60*1000;

var tDate = new Date( tomorrow );

console.log(  tDate.toLocaleDateString()  );
