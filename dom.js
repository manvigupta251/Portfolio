// let element = document.getElementsByTagName("img")[2].getAttribute("loading");
// console.log(element);

// document.getElementById("my").style.border="5px solid pink";
// let elem=document.getElementById("my").style.border;
// console.log(elem);

function big() {
    document.getElementById("b").style.fontSize="50px";
}

function col() {
    document.getElementById("b").style.color="red";
}

document.getElementById("rest").addEventListener("mouseenter", function() {
    this.style.fontSize="50px";
});
document.getElementById("rest").addEventListener("dblclick", function() {
    this.style.color="red";
});