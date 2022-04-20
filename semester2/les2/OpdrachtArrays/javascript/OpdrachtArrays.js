let namen = ['kees', 'barry', 'brend','winrik','david'];
console.log(namen.length);
console.log(namen[0],namen[2],namen[4]);
let extraPersoon = prompt("Geef een extra naam op: ", "onbekend");
namen.push(extraPersoon);

for (let i=0 ; i<namen.length; i++) { 

    console.log(namen[i].toString())
};