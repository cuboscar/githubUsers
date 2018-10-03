class Github {
    constructor() {
        this.client_id = "9f3ed29ecf84621c4431";
        this.client_secret = 'aad15a8862b94b24a3fdcfef746d30bf6df62f2d';
        //Add properties to filter repositories
        this.repos_count = 5
        this.repos_sort = "created: asc";
    }
    async getUser(user) {
        let urlProfile = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        let urlRepos = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        const profileResponse = await fetch(urlProfile)
        const repoResponse = await fetch(urlRepos)

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        console.log(profile)
        return {
            profile, repos
        }
    }
    //GitHub Class End
}