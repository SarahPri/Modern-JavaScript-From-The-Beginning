// getCurrentPosition()
function curSuccess(pos){
  const coords = pos.coords;
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err){
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // use GPS if available
  timeout: 5000,
  maximumAge: 0 //Do not use a cached position
};
navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions)

// =======================================
// watchPosition()
const target = {
  latitude: 41.3874387,
  longitude: -71.394839
}
function watchSuccess(pos){
  const coords = pos.coords;

  if(target.latitude === coords.latitude && coords.longitude === coords.longitude){
    console.log('You have reached your destination!');
    navigator.geolocation.clearWatch(id)

  }
  
}

function watchError(err){
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // use GPS if available
  timeout: 5000,
  maximumAge: 0 //Do not use a cached position
};
const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions)


