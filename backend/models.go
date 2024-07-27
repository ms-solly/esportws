package main

import (
    "gorm.io/gorm"
)

type Team struct {
    gorm.Model
    Name    string   `json:"name"`
    Country string   `json:"country"`
    Matches int      `json:"matches"`
    Winrate float64  `json:"winrate"`
    Lineup  []string `json:"lineup" gorm:"type:text[]"`
}
