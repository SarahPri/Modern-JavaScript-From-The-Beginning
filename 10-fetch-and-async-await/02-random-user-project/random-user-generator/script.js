function fetchUser(){
  fetch('https://randomuser.me/api')
  .then((res) => res.json())
  .then((data) => {
    displayUser(data.results[0]);
  });

  } 

  function displayUser(user){
    const userDisplay = document.querySelector('#user')
    if(user.gender === 'female'){
      document.body.style.background = 'pink'

    }else {
      document.body.style.backgroundColor = 'steelblue'

    }

    userDisplay.innerHTML = `
    <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> Boston MA
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> 30</p>
            </div>
          </div>
        </div>`
  
  }
document.querySelector('#generate').addEventListener('click', fetchUser)


fetchUser()