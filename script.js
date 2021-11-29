let container = document.getElementById("container");
document.body.appendChild(container);

let tower1 = document.createElement("DIV");
let tower2 = document.createElement("DIV");
let tower3 = document.createElement("DIV");

tower1.className = "tower";
tower2.className = "tower";
tower3.className = "tower";

container.appendChild(tower1);
container.appendChild(tower2);
container.appendChild(tower3);

let disk1 = document.createElement("DIV");
disk1.id = "disk1";
let disk2 = document.createElement("DIV");
disk2.id = "disk2";
let disk3 = document.createElement("DIV");
disk3.id = "disk3";
let disk4 = document.createElement("DIV");
disk4.id = "disk4";

tower1.appendChild(disk1);
tower1.appendChild(disk2);
tower1.appendChild(disk3);
tower1.appendChild(disk4);


