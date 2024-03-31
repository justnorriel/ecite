<script lang="ts">
    import '../app.css';
    import Header from './Header.svelte'
    import Footer from './Footer.svelte'
    import { ModeWatcher } from "mode-watcher";
    
</script>

<div class="mx-auto">
    <Header/>
   <main class=" overflow-auto h-svh mx-auto max-w-4xl">
    <ModeWatcher />
    <slot/>
   </main>

   <Footer/>
</div>  

<style>
</style>