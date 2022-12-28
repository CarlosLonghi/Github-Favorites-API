// Classe que faz a busca dos dados na API do GITHUB
export class GithubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`
    // pegando os dados da API do GITHUB com 'FETCH', transformando em JSON e retornando eles de forma desestruturada em um Objeto.
    return fetch(endpoint)
      .then(data => data.json())
      .then(({ login, name, public_repos, followers }) => ({
        login,
        name,
        public_repos,
        followers
      }))
  }
}
