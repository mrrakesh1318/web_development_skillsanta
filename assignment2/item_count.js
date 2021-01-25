var item_list =[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

var obj ={};

for (i = 0; i < item_list.length; i++){
    if (item_list[i] in obj)
    obj[item_list[i]]++;
    else
    obj[item_list[i]] = 1;
}

getItemByValue = (object, value) => {
    let key;
    for (key in object){
        if (object[key] == value) return key;
    }
};

function array_max(array){
    let max =array[0];
    for (i = 0; i <array.length; i++){
        if(max < array[i]) 
        max = array[i];
    }
    return max;
}

max_occur = array_max(Object.values(obj));
key_item = getItemByValue(obj, max_occur);
//document.write(obj[2]);
document.write(key_item+" "+max_occur+" times <br>");