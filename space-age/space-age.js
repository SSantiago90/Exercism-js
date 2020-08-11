const orbitalPeriods = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1.0,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132,
}

const earthSecs = 31557600;

export const age = (planet,secs) => {
  let earthAge = secs / earthSecs;
  let spaceAge = earthAge / orbitalPeriods[planet];
  
  return Number(spaceAge.toFixed(2));
  //OR doing it all in one sentence    
  //return Number(((secs / earthSecs) / orbitalPeriods[planet]).toFixed(2));
};
