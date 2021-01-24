var arr = [3,8,7,6,5,-4,-3,2,1];
var temp = 0;

for (i = 0; i < arr.length; i++){
    for (j = i+1; j <= arr.length; j++){
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }    
}

document.write("After sorting <br>");
document.write(arr);
document.write("<hr>");