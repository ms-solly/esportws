package main

import (
    "time"
    "net/http"
    "github.com/golang-jwt/jwt/v4"
    "encoding/json"
)

var jwtKey = []byte("my_secret_key")

type Credentials struct {
    Username string `json:"username"`
    Password string `json:"password"`
}

type Claims struct {
    Username string `json:"username"`
    jwt.StandardClaims
}

func login(w http.ResponseWriter, r *http.Request) {
    var creds Credentials
    json.NewDecoder(r.Body).Decode(&creds)
    // Assume we have a function to validate user credentials
    if !validateUser(creds.Username, creds.Password) {
        w.WriteHeader(http.StatusUnauthorized)
        return
    }

    expirationTime := time.Now().Add(5 * time.Minute)
    claims := &Claims{
        Username: creds.Username,
        StandardClaims: jwt.StandardClaims{
            ExpiresAt: expirationTime.Unix(),
        },
    }

    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    tokenString, err := token.SignedString(jwtKey)
    if err != nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }

    http.SetCookie(w, &http.Cookie{
        Name:    "token",
        Value:   tokenString,
        Expires: expirationTime,
    })
}

func validateUser(username, password string) bool {
    // Implement your user validation logic here
    return true
}
