extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn say_hello_from_rust() {
 log("Howdy there!")
}

#[wasm_bindgen]
pub struct ColtonsClient {

}

#[wasm_bindgen]
impl ColtonsClient {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        log("new hit");
        Self {

        }
    } 

    pub fn update(&mut self, time:f32, height:f32, width:f32) -> Result<(), JsValue>{
        log("update hit");
        Ok(())
    }
    pub fn render (&self) {
        log("render hit");
    }
}