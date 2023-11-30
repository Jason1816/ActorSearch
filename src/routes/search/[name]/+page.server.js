import { get_actor, get_credits } from '../../../lib/server/actor';
import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export const load = async(event)=>{
    const {name}=event.params;
    const actor = await get_actor(name); 
    console.log(actor);
    if(!actor) throw error(400,"no actor found")
    const credits=await get_credits(actor)
console.log(credits);
if(!credits) throw error(400,"no movies found")
return {actor,credits};
}