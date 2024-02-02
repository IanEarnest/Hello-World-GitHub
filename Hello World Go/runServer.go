// Web Server - create GET and POST HTML response on 8080
package main // stand alone exe

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Running Go server") // go build helloWorldGo.go
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Access-Control-Allow-Origin", "http://localhost:5555")

		if r.Method == "GET" {
			fmt.Fprintf(w, "<p>GET</p>")
		}

		if r.Method == "POST" {
			fmt.Fprintf(w, "<p>POST</p>") // return HTML
		}
	})
	http.ListenAndServe(":8080", nil)
}

/*
func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
	http.HandleFunc("/", handler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}
*/
