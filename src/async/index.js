const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setInterval(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!'))
    })
}

const anotherFn = async () => {
    const someThig = await fnAsync();
    console.log(someThig);
    console.log('Hello!');
}

console.log('Before!');
anotherFn();
console.log('After');
