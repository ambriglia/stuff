var commandName = process.argv[2];

console.log(commandName);

if(commandName === 'concert-this'){
  concertThis();
} else if(commandName === 'movie-this') {
  movieThis();
} else if (commandName === 'song-this') {
  spotify();
}

function concertThis() {
  console.log('do concert stuff');
}

function movieThis() {
  console.log('do movie stuff');
}

function spotify() {
  console.log('spotify some song');
}