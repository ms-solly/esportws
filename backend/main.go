// backend/main.go
package main

import (
    "log"
    "net/http"
    "github.com/gorilla/mux"
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

var db *gorm.DB

func main() {
    dsn := "host=localhost user=postgres password=breathing dbname=teams port=5432 sslmode=disable"
    var err error
    db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatalf("failed to connect to database: %v", err)
    }

    db.AutoMigrate(&Team{})

    r := mux.NewRouter()
    r.HandleFunc("/teams", getTeamsHandler).Methods("GET")
    r.HandleFunc("/teams", createTeamHandler).Methods("POST")

    log.Println("Server is running on http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", r))
}
