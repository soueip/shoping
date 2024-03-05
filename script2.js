var likes = document.getElementsByClassName("like");
console.log(likes);
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener("click", function () {
    like.firstElementChild.style.color = "red";
  });
}

var minus = document.getElementsByClassName("minus-btn");
for (let i = 0; i < minus.length; i++) {
  let btnminus = minus[i];
  btnminus.addEventListener("click", function () {
    if (btnminus.nextElementSibling.value > 1) {
      btnminus.nextElementSibling.value--;
      Price1();
      Price2();
      Price3();
      total();
    }
  });
}

var plus = document.getElementsByClassName("plus-btn");

for (let i = 0; i < plus.length; i++) {
  let btnplus = plus[i];
  btnplus.addEventListener("click", function () {
    btnplus.previousElementSibling.value++;
    Price1();
    Price2();
    Price3();
    total();
  });
}

var deletes = document.getElementsByClassName("delete");

for (let i = 0; i < deletes.length; i++) {
  let del = deletes[i];
  del.addEventListener("click", function () {
    del.parentElement.remove();
    Price1();
    Price2();
    Price3();
    total();
  });
}

var items = document.getElementsByClassName("Item");
var final = document.getElementById("finalPrice");
function total() {
  s = 0;
  for (let i = 0; i < items.length; i++) {
    item = items[i];
    let price = item.querySelector(".price").innerText;
    let quant = item.querySelector(".Quant").value;

    s = s + price * quant;
  }
  return (final.value = s);
}

function Price1() {
  let price = document.getElementById("p1");
  let quant1 = document.getElementById("q1");
  price.innerText = 1379 * quant1.value;
}

function Price2() {
  let price = document.getElementById("p2");
  let quant1 = document.getElementById("q2");
  price.innerText = 1768 * quant1.value;
}

function Price3() {
  let price = document.getElementById("p3");
  let quant1 = document.getElementById("q3");
  price.innerText = 2490 * quant1.value;
}
