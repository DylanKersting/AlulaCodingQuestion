import axios from 'axios'


export const asteroids = async (ctx) => {
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${ctx.request.body.dateStart}&end_date=${ctx.request.body.dateEnd}&api_key=${process.env.API_KEY}`
  try {
    // extract all asteroids out of response
    let asteroids = Object.values((await axios.get(url)).data.near_earth_objects).flat()
    // to check to distance and return names
    asteroids = asteroids.filter(object => object.close_approach_data.find(data => parseFloat(data.miss_distance.kilometers) <= ctx.request.body.within.value))
                  .map(object => object.name)
    ctx.body = { asteroids }
    ctx.response.status =  200
  } catch (e) {
    ctx.response.status = 400
    ctx.response.body = {error: true, message: "Failed to call NASA API"}
  }
  
}