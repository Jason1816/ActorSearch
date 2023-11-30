<script>
    import {page} from "$app/stores"
  import Credits from "../../../components/Credits.svelte";
    export let data;
    let credits;

    $: if (data) {
    credits = data.credits;
}
</script>
<h1>Search results for {data.actor.name}</h1>
<ol>
	{#each credits as credit (credit.id)}
    <li>
        <Credits {credit}/>
    </li>
{/each}
</ol>

<style>
	ol {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-top: 2rem;
	}

	button {
		text-decoration: underline;
	}
</style>