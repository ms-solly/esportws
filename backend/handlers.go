package main

import (
    "encoding/json"
    "net/http"
)

func getTeamsHandler(w http.ResponseWriter, r *http.Request) {
    var teams []Team
    result := db.Find(&teams)
    if result.Error != nil {
        http.Error(w, "Failed to fetch teams", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(teams)
}

func createTeamHandler(w http.ResponseWriter, r *http.Request) {
    var team Team
    if err := json.NewDecoder(r.Body).Decode(&team); err != nil {
        http.Error(w, "Invalid request payload", http.StatusBadRequest)
        return
    }

    result := db.Create(&team)
    if result.Error != nil {
        http.Error(w, "Failed to create team", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(team)
}
