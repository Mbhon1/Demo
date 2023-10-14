package main

import (
    "net/http"

    "github.com/gin-gonic/gin"
	ginSwagger "github.com/swaggo/gin-swagger"
	swaggerFiles "github.com/swaggo/files"
)

type wash struct {
	ID    string `json:"id"`
	Title string `json:"title"`
	Type  string `json:"type"`
	Price int32  `json:"price"`
}

var washes = []wash{
	{ID: "1", Title: "Standard Wash", Type: "shoes", Price: 50},
	{ID: "2", Title: "Leather", Type: "shoes", Price: 50},
	{ID: "3", Title: "Suede/Nubuck", Type: "shoes", Price: 100},
	{ID: "4", Title: "White Shoes", Type: "shoes", Price: 70},
}

func main() {
	router := gin.Default()
	router.GET("/washes", getWashes)
	router.GET("/washes/:id", getWashByID)
	router.POST("/washes", postWashes)
	router.GET("/docs/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	router.Run("localhost:8080")
}

func getWashes(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, washes)
}

func postWashes(c *gin.Context){
	var newWash wash

	if error := c.BindJSON(&newWash); error != nil {
		return
	}

	washes = append(washes, newWash)
	c.IndentedJSON(http.StatusCreated, newWash)
}

func getWashByID(c *gin.Context) {
	id := c.Param("id")

	for _, a := range washes {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "wash not found"})
}
