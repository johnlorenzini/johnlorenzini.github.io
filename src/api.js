const getRepositories = (user) => {
    const promise = new Promise((resolve, reject) => {
      const url = `https://api.github.com/users/${user}/repos`;
      const request = new XMLHttpRequest();
      request.open("GET", url);
      request.setRequestHeader(
        "accept",
        "application/vnd.github.mercy-preview+json"
      );
  
      request.onload = () => {
        if (request.status === 200) {
          const response = JSON.parse(request.responseText);
          const repos = [];
          
          for (let i = 0; i < response.length; i++) {
            for (let j = 0; j < response[i].topics.length; j++) {
              if (response[i].topics[j].toLowerCase() === "portfolio-project") {
                let repo = {
                  name: response[i].name,
                  description: response[i].description,
                  topics: response[i].topics,
                  repo_url: response[i].html_url,
                  created_at: response[i].created_at,
                };
                repos.push(repo);
              }
            }
          }
          repos.sort(function(a,b){
            return new Date(b.created_at) - new Date(a.created_at);
          });
          resolve(repos);
        } else {
          reject(
            new Error(
              "Error: " +
                request.statusText +
                " ratelimited!"
            )
          );
        }
      };
  
      request.send();
    });
    return promise;
  };
export default getRepositories;