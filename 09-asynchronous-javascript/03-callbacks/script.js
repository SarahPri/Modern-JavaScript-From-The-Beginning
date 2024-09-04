// function toggle(e) {
//   console.log('callback ran');
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);


const posts = [
  {
  title: 'Post one',
  body: 'this is post one'
},
  {
  title: 'Post two',
  body: 'this is post two'
},
];

function createPost(post, cb){
  setTimeout(() => {
    posts.push(post);
    cb()

  }, 2000);
}


function getPosts(){
  setTimeout(() => {
    posts.forEach(function (post){
      const div = document.createElement('div');
      div.innerHTML = `<strong> ${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div)

    });

    
   }, 1000);
}

createPost({title: 'Post Three', body: 'This is Post Three'}, getPosts)





// getPosts();