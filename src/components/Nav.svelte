<script>
import "../app.css";
import MdMovie from 'svelte-icons/md/MdMovie.svelte'
import MdSearch from 'svelte-icons/md/MdSearch.svelte'
import {goto} from "$app/navigation"
let name="";
function handleSubmit(){
 goto(`/search/${name}`)
}
</script>
<nav>
    <div class="nav-left">
        <a class="btn btn-ghost w-12" href="/"><MdMovie/></a>
    </div>
    <div class="nav-right">
        <div class="form-control">
            <div class="input-wrapper">
                <input bind:value={name} type="text" placeholder="Search" class="search-input " />
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <i on:click={handleSubmit} class="search-icon"><MdSearch/></i>
            </div>
        </div>
    </div>
</nav>


<style>
	nav {
    background-color: var(--primary-color);
    color: white;
    font-size: 1.25rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-left, .nav-right {
    display: flex;
    align-items: center;
}

.nav-right {
    justify-content: flex-end;
}
.input-wrapper {
    display: flex;
    align-items: center;
    position: relative;
}

.search-input {
    padding-left: 20px; 
    color: black
}

.search-icon {
    position: absolute;
    left: 220px; 
    width: 24px;
    height: 24px;
    color: black;
}
</style>