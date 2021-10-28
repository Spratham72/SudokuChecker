var check=(arr)=>{
    let out=true;
for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr.length; j++){
        if(!checkValue(arr,arr[i][j],i,j)){
            out=false;
    }
    }
}
return out;
}
function checkValue(arr,value,row,col){
    let r=0; let c=0; let g=0;
    for(var i=0; i<arr.length; i++){
        if(arr[row][i]==value){
            r++;
            if(r>1){
                return false;
            }
        }
        if(arr[i][col]==value){
            c++;
            if(c>1){
                return false;
            }
           
        }
        if(arr[(3*Math.floor(row/3))+Math.floor(i/3)][3*Math.floor(col/3)+Math.floor(i%3)]==value){
            g++;
            if(g>1){
            return false;
            }
        }
    }
    return true;
}
module.exports=check;
