package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "Server running...",
			"success": true,
		})
	})

	var port string
	if len(os.Args) > 1 {
		port = ":" + os.Args[1]
	} else {
		// Nếu không có giá trị port được cung cấp, mặc định sẽ là port 8080
		port = ":8080"
	}
	r.Run(port)
}
