let node = { name: "rajesh" };
let node2 = { name: "amrita" };
node = node2;
node2.name = "yes";
node.name = "no";

console.log(node, node2);
