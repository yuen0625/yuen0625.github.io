
function startData(){
    localStorage.setItem('黑糖咖啡',0);
    localStorage.setItem('拿鐵咖啡',0);
    localStorage.setItem('巧克力蛋糕',0);
    localStorage.setItem('卡布奇諾',0);
    localStorage.setItem('義式咖啡',0);
}

function loadfunction(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);//An object implementing URLSearchParams can directly be used in a for...of structure
    const food_type = urlParams.get('food');

    if(food_type == 1){
        document.getElementById('productTitle').innerHTML = "黑糖咖啡";//想要寫入的字串或 HTML Code 寫入至 ID 元素。
        document.getElementById('productimg').src = "../picture/pizza.jpg";
        document.getElementById('productPrice').innerHTML = "100";
    }
    if(food_type == 2){
        document.getElementById('productTitle').innerHTML = "拿鐵咖啡";
        document.getElementById('productimg').src = "../picture/sandwich.jpg";
        document.getElementById('productPrice').innerHTML = "100";
    }
    if(food_type == 3){
        document.getElementById('productTitle').innerHTML = "巧克力蛋糕";
        document.getElementById('productimg').src = "../picture/dessert.jpg";
        document.getElementById('productPrice').innerHTML = "100";
    }
    if(food_type == 4){
        document.getElementById('productTitle').innerHTML = "卡布奇諾";
        document.getElementById('productimg').src = "../picture/Juice.jpg";
        document.getElementById('productPrice').innerHTML = "100";
    }
    if(food_type == 5){
        document.getElementById('productTitle').innerHTML = "義式濃縮咖啡";
        document.getElementById('productimg').src = "../picture/steak.jpg";
        document.getElementById('productPrice').innerHTML = "100";
    }
}

function storeData(){
    document.getElementById('buttonadd').innerHTML="Added";
    var c = document.getElementById('qty');
    var qty = c.options[c.selectedIndex].text;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);//An object implementing URLSearchParams can directly be used in a for...of structure
    const food_type = urlParams.get('food');

    if(food_type == 1)localStorage.setItem('黑糖咖啡',qty);//getItem作為storage的參數或鍵名，會將鍵名加到存處中，如果鍵名已存在則更新其值。
    if(food_type == 2)localStorage.setItem('拿鐵咖啡',qty);
    if(food_type == 3)localStorage.setItem('巧克力蛋糕',qty);
    if(food_type == 4)localStorage.setItem('卡布奇諾',qty);
    if(food_type == 5)localStorage.setItem('義式濃縮咖啡',qty);
}

var a=[];
a[0] = localStorage.getItem('黑糖咖啡');
a[1] = localStorage.getItem('拿鐵咖啡');
a[2] = localStorage.getItem('巧克力蛋糕');
a[3] = localStorage.getItem('卡布奇諾');
a[4] = localStorage.getItem('義式濃縮咖啡');

function cartfunction(){
    var j=0;
    for(var i=0;i<a.length;i++){
        if (a[i]!=null && a[i]!=0){
            newRow(i);
            document.getElementById("xButton"+i).innerHTML="<a href='javerscript:void(0)'onclick='detectCard("+i+")'  class='xButton'>x</a>"
            document.getElementById("pBitmap"+i).innerHTML=tablePicture(i);
            document.getElementById("pName"+i).innerHTML = tableName(i);
            document.getElementById("pPrice"+i).innerHTML = tablePrice(i);
            document.getElementById("pQuantity"+i).innerHTML = a[i];
        }
        else j++;
    }
    if(j == 4)document.getElementById('emptyCart').innerHTML = "Still empty, keep exploring ~"
}

function newRow(i){
    document.getElementById('cartTable').insertRow().id="t"+i;
    document.getElementById("t"+i).insertCell().id="xButton"+i;
    document.getElementById("t"+i).insertCell().id="pBitmap"+i;
    document.getElementById("t"+i).insertCell().id="pName"+i;
    document.getElementById("t"+i).insertCell().id="pPrice"+i;
    document.getElementById("t"+i).insertCell().id="pQuantity"+i;
}

function tablePrice(i){
    if(i==0)return 100;
    if(i==1)return 100;
    if(i==2)return 100;
    if(i==3)return 100;
    if(i==4)return 100;
}

function tableFunction(){
    var totalprice=0;
    for(var i=0;i<a.length;i++){
        totalprice+=tablePrice*a[i];
    }
    document.getElementById('tobleprice').innerHTML="Total"+totalprice+"NT";
}

function Checkout(){
    var j=0;
    for(var i=0;i<a.length;i++){
        if(a[i]!=0)j++;
    }
    if(j!=0){
        startData();
        location.href="final.html";
    }
    else alert("You don't any item need to cart!");
}

function tablePicture(i){
    if(i==0)return "<img src='../picture/pizza.jpg' class='bitPic'>";
    else if(i==1)return"<img src='../picture/sandwich.jpg' class='bitPic'>";
    else if(i==2)return"<img src='../picture/dessert.jpg'>";
    else if(i==3)return"<img src='../picture/Juice.jpg' class='bitPic'>";
    else if(i==4)return"<img src='../picture/steak.jpg' class='bitPic'>";
}

function tableName(i){
    if(i==0)return　"黑糖咖啡";
    else if(i==1) return "拿鐵咖啡";
    else if(i==2) return "巧克力蛋糕";　　
    else if(i==3) return "卡布奇諾";
    else if(i==4) return "義式濃縮咖啡";　
}


