

function fetchUser(callback) {
    console.log("Fetching user Data..!");

    setTimeout(() => {

        let user = {

            id: 1,
            name: "OMKAR"
        }
        callback(user);
    }, 3000);

}
function displayUser(user) {
    console.log("User Id : " +user.id + "\n" + "User Name : " + user.name);

}

fetchUser(displayUser);