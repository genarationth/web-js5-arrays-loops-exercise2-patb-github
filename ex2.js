// Part 1
const line = ["Sofia", "David", "Juan"];

// Part 2
line.push("Sara");
line.push("Augustin");
line.shift();
// line = ['David', 'Juan', 'Sara', 'Augustin'];

// Part 3
line.splice(line.indexOf("David") + 1, 0, "Renata");
line.push("Elena");
// line = ['David', 'Renata', 'Juan', 'Sara', 'Augustin', 'Elena'];
