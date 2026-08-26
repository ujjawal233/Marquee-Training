        function getUser(callback){
            const xhr = new XMLHttpRequest();
            
            xhr.open("GET", "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");

            xhr.onload = function(){
                if(xhr.status >=200 && xhr.status < 300){
                    callback(null,xhr.responseText);
                }
                else{
                    callback("Server Error",null)
                }
            };

            xhr.onerror = function(){
                callback("Network Error",null);
            };

            xhr.send();
        }

        getUser((err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            const articles = JSON.parse(data).articles;
            const cards = document.querySelectorAll(".news-card");

            cards.forEach((card, index) => {
                const article = articles[index];

                if (!article) {
                    card.style.display = "none";
                    return;
                }

                card.querySelector(".source").textContent =
                    article.source?.name || "Unknown source";
                card.querySelector(".author").textContent =
                    `By ${article.author || "Unknown author"}`;
                card.querySelector(".title").textContent =
                    article.title || "No title available";
                card.querySelector(".description").textContent =
                    article.description || "No description available";
                card.querySelector(".url").textContent =
                    article.url || "";
                card.querySelector(".url-to-image").textContent =
                    article.urlToImage || "";
                card.querySelector(".published-at").textContent =
                    new Date(article.publishedAt).toLocaleString();
                card.querySelector(".content").textContent =
                    article.content || "";
            });
        });