function getUser() {
  const username = document.getElementById('username').value;
  const result = document.getElementById('result');

  if (username === "") {
    result.innerHTML = "<p>Please enter a username</p>";
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
      if (data.message === "Not Found") {
        result.innerHTML = "<p>User not found</p>";
      } else {
        result.innerHTML = `
          <img src="${data.avatar_url}" width="100">
          <h2>${data.name}</h2>
          <p>Followers: ${data.followers}</p>
          <p>Repos: ${data.public_repos}</p>
          <a href="${data.html_url}" target="_blank">View Profile</a>
        `;
      }
    });
}
