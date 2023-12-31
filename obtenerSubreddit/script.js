// Consigna:
// Reddit es una red de comunidades en la que cada comunidad se conocer como subreddit. Crear una función obtenerSubreddit que tome como argumento un string url que consista en la url de un subreddit (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')
// Ejemplos:
// obtenerSubreddit('https://www.reddit.com/r/javascript/') // 'javascript' 
// obtenerSubreddit('https://www.reddit.com/r/aww/') // 'aww' 

const obtenerSubreddit = (url) => {
    let adelante = url.slice(25);
    return adelante.replace('/', '')
}

console.log(obtenerSubreddit('https://www.reddit.com/r/javascript/'));
console.log(obtenerSubreddit('https://www.reddit.com/r/aww/'));