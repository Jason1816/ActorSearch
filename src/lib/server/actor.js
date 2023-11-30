import { secret_api_key } from "$env/static/private";
import { public_base_url } from "$env/static/private";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWIwMGFmY2JmNDg3YmU2ZGM2YTQ0NDEyMjM1YWFjMyIsInN1YiI6IjY1NjYxOWQyODlkOTdmMDBjNDM1ZTIwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukE6hZqi8MzKr2R-piukRKsLKNz0Y-2_ySfoP9IEsho'
    }
  };
export async function get_actor(search) {
      

    try {
        console.log(search)
        const res = await fetch(`https://api.themoviedb.org/3/search/person?query=${search}&include_adult=true&language=en-US&page=1`, options)
        if (res.ok) {
            const data = await res.json();
            const { results } = data;
            if (results.length === 0) return null;
            return results[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching actor:", error);
        return null;
    }
}

export async function get_credits(actor, amount = 10) {
    

    try {
        const res = await fetch(`https://api.themoviedb.org/3/person/${actor.id}/movie_credits?language=en-US`, options);
        if (res.ok) {
            const data = await res.json();
            const { cast } = data;
            return cast.slice(0, amount);
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching credits:", error);
        return null;
    }
}

