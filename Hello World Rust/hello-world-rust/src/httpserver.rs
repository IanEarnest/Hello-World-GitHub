//use std::net::TcpListener;
use std::io::{BufRead, Write};


fn main() {
    run_server();
}

// not in parallel - only one user at a time
// TODO 404 page
// TODO SECURITY - asking for files outside of dir, stop
pub fn run_server() {
    println!("Hello from httpserver - goto 127.0.0.1:9999");
    println!("...");

    let listener = std::net::TcpListener::bind("127.0.0.1:9999").unwrap(); // unwrap = crash on error
    for mut stream in listener.incoming().flatten() {
        let mut rdr = std::io::BufReader::new(&mut stream);
        let mut l = String::new();
        rdr.read_line(&mut l).unwrap();

        println!("---new request{l}");
        print!("{l}"); // print request
        // Request 1 = /index.html
        // Request 2 = /favicon.ico
        
        match l.trim().split(' ').collect::<Vec<_>>().as_slice() {
            ["GET", resource, "HTTP/1.1"] => {
                loop {
                    let mut l = String::new();
                    rdr.read_line(&mut l).unwrap();
                    
                    if l.trim().is_empty() { 
                        println!("---End of request received");
                        println!("");
                        break;
                        // Listen for request - end of request is blank line
                    } 
                    print!("{l}"); // print request
                }
                let mut p = std::path::PathBuf::new();
                p.push("htdocs"); // Needs at least a index.html and favicon.ico
                p.push(resource.trim_start_matches("/")); // TODO: DANGEROUS gives access to all files...
                if resource.ends_with('/') {
                    p.push("index.html");
                    println!("/ dir used - showing index.html instead");
                }
                //print!("{l}"); // print request
                //stream.write_all(b"HTTP/1.1 200 OK\r\n\r\nHello!").unwrap();
                stream.write_all(b"HTTP/1.1 200 OK\r\n\r\n").unwrap();
                stream.write_all(&std::fs::read(p).unwrap()).unwrap(); // Output of file?
                //stream.write_all(&std::fs::read(p).unwrap());
                println!("Showed page...");
                
                /*
                // ERROR - When file doesnt exist or favicon.ico is not found
                thread 'main' panicked at httpserver.rs:44:52:
                called `Result::unwrap()` on an `Err` value: Os { code: 2, kind: NotFound, message: "The system cannot find the file specified." }
                note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
                
                // ERROR - When browser exited...?
                thread 'main' panicked at httpserver.rs:55:18:
                not yet implemented
                note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
                */
            }
            _ => todo!() // Any other request crashes server
        }
        println!("server waiting for new request");
        println!("...");
    }
}
