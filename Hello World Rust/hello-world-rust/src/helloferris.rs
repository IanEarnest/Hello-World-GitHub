/*
Cargo.toml added: 
[dependencies]
ferris-says = "0.3.1"

cargo build
*/ 
use ferris_says::say;
use std::io::{stdout, BufWriter};

pub fn sayhello() {
    let stdout = stdout();
    let message = String::from("Hello fellow Rustaceans!");
    let width = message.chars().count();

    let mut writer = BufWriter::new(stdout.lock());
    say(&message, width, &mut writer).unwrap();
}
