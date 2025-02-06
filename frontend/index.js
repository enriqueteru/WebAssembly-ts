import init, { factorial_wasm } from "../pkg/factorial_wasm.js";

async function main() {
    await init();

    console.time("WebAssembly Factorial");
    const result = factorial_wasm(100000);
    console.timeEnd("WebAssembly Factorial");

    console.log(`Factorial de 100000 (WASM): ${result}`);
    document.getElementById("output").innerText = `Factorial de 100000 en WebAssembly: ${result}`;
}

function factorialBigInt(n) {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}

async function test() {
    console.time("JavaScript Factorial");
    const resultJS = factorialBigInt(100000);
    console.timeEnd("JavaScript Factorial");

    console.log(`Factorial de 100000 (JS): ${resultJS}`);
    document.getElementById("test").innerText = `Factorial de 100000 (JS): ${resultJS}`;
}

main();
test();
