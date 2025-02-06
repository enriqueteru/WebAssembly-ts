use wasm_bindgen::prelude::*;

// Factorial usando enteros de 64 bits
#[wasm_bindgen]
pub fn factorial_wasm(n: u32) -> u64 {
    let mut result: u64 = 1;
    for i in 2..=n {
        result = result.saturating_mul(i as u64);
    }
    result
}
