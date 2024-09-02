const socials = ["Twitter", "Facebook", "TikTok", "LinkedIn"];
// console.log(socials.__proto__);


// socials.forEach(function(item){
//     console.log(item);
// })

// using callback function
// socials.forEach((item) => console.log(item))


// Passing a named function

function logSocials(social){
    console.log(social);
}

socials.forEach(logSocials)

// For each is mostly used on an array of objects
const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'TikTok', url: 'https://tiktok.com'},
    {name: 'LinkedIn', url: 'https://linkedin.com'}
];

socialObjs.forEach((item) => console.log(item.url))