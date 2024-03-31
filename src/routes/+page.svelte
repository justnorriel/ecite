<script lang="ts">
    import Features from './Features.svelte';
    import Get from './Get.svelte';
    import Intro from './Intro.svelte';
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Albertus&display=swap" rel="stylesheet">
    <title>Home</title>
</svelte:head>

<section>
    <Intro/>
    <Get/>
    <Features/>
    
</section>