const gitHub = new Github();
const ui = new UI();
const searchUser = document.getElementById("searchUser");
searchUser.addEventListener('keyup', e => {
    const userText = e.target.value;

    if (userText != "") {
        //Make HTTP Call
        console.log(userText)
        gitHub.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                //show alert
                ui.showAlert("USER NOT FOUND", "alert alert-danger")
            } else {
                //show in UI

                console.log(data)
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
        })
    } else {
        ui.clearProfile();//clear user Profile
    }
});