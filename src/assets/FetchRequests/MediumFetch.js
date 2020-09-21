// Grabs Information from FetchRequest
export function medium_article_grab(_this){
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40JonathanTomDean')
    .then(resp => resp.json())
    .then(jsonData => {
        _this.setState({
            mediumData: jsonData
        })
    })
    .catch(error => console.log(error))
}