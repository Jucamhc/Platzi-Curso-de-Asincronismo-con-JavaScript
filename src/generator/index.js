function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

/* Other Example */

function* iterate(array) {
    for (const item of array) {
        yield item
    }
}

const it = iterate(["camilo", "Luciana", "Carlos", "Martin"]);

console.log(it.next().value); //camilo
console.log(it.next().value); //Luciana
console.log(it.next().value); //Carlos
console.log(it.next().value); //Martin
console.log(it.next().value); //undefined