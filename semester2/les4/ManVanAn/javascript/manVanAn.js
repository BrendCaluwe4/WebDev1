let zin = "De man van An geeft geen hand aan ambetante verwanten".toLowerCase();
let count = 0;
for (let i = 0; i < zin.length; i++) {
    if (zin.indexOf("an",i) !== -1) {
        count += 1;

        i = zin.indexOf("an",i);
    }
}
console.log(count);
