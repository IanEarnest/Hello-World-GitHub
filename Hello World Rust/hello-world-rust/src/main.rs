mod mymod1;
mod helloferris;
//use sub::sub;
/*
settings.json added:
    "rust-analyzer.linkedProjects": [
        "C:/Users/ianea/source/repos/Hello-World-GitHub/Hello World Rust/hello-world-rust/Cargo.toml"
    ]
*/ 

fn main() {
    println!("Hello, world RUST!");

    helloferris::sayhello(); // Hello fellow Rustaceans
    
    // Reverse &str...
    let mut s2 = reverse("hi");
    println!("{s2}");
    
    let mut name1 = String::from("name1value");
    let mut name2: String = name1.chars().rev().collect();
    println!("{name1}, {name1}");

    
    /*
    let mut myarray: [i32; 3] = [0; 3];
    
    myarray[1] = 1;
    myarray[2] = 2;
    
    // This loop prints: 0 1 2
    for x in myarray {
        print!("{x} ");
    }
    */
    
    
    let answer = 42;
    println!("Answer: {answer}");
    
    // Loop
    for i in 0..5 {
        println!("Task {i}"); // 0-4
    }

    // Call other methods - https://stevedonovan.github.io/rust-gentle-intro/1-basics.html
    let res = sqr(2.0);
    println!("square is {res}");
    
    // Call other files
    println!("Loading from other file...");
    mymod1::func1();

    // Read/Write files
}

fn sqr(x: f64) -> f64 {
    return x * x;
}


pub fn reverse(input: &str) -> String {
    //todo!("Write a function to reverse {input}");
    let mut oldS = String::from(input);
    let mut newS = String::from("");
    let s1count = input.len();
    for x in 0..s1count {
        let mut possible = oldS.pop();
        
        if (possible.is_none()) {
            continue;
        }
        newS.push_str(&possible.unwrap().to_string());
        //newS.push_str(&oldS.pop().unwrap().to_string());
    }
    return newS;

    
    // Reverse String
    /*
    let mut s1 = String::from("Hello, world!"); //let mut s = String::new();
    let mut s2 = String::from("");
    let s1count = s1.len();
    for x in 0..s1count {
        //print!("{x}");
        //s2.push_str(&x.to_string());
        s2.push_str(&s1.pop().unwrap().to_string());
    }
    println!("s2: {s2}");
    */
}