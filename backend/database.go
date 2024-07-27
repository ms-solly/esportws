package main

import (
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
    "log"
)

var DB *gorm.DB

func initDB() {
    dsn := "host=localhost user=postgres password=breathing dbname=teams port=5433 sslmode=disable TimeZone=Asia/Shanghai"
    var err error
    DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatalf("failed to connect to database: %v", err)
    }
    log.Println("Database connected successfully")
}
