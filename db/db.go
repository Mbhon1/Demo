package db

type wash struct {
	ID    string `json:"id"`
	Title string `json:"title"`
	Type  string `json:"type"`
	Price int32  `json:"price"`
}

var washType = []wash{
	{ID: "1", Title: "Standard Wash", Type: "shoes", Price: 50},
	{ID: "2", Title: "Leather", Type: "shoes", Price: 50},
	{ID: "3", Title: "Suede/Nubuck", Type: "shoes", Price: 100},
	{ID: "4", Title: "White Shoes", Type: "shoes", Price: 70},
}


