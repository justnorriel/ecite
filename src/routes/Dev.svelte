	
<script lang="ts">
    import dev1 from '$lib/images/nf.jpg'
    import dev2 from '$lib/images/dz.jpg'
    import dev3 from '$lib/images/cj.jpg'
    import dev4 from '$lib/images/jj.jpg'
    import * as Avatar from "$lib/components/ui/avatar";
    import * as HoverCard from "$lib/components/ui/hover-card";
  </script>

  <div class="grid grid-cols-2 text-center justify-center items-start gap-2">
    
  <HoverCard.Root>
    <HoverCard.Trigger
      href="https://web.facebook.com/nrrlzsxc/"
      target="_blank"
      rel="noreferrer noopener"
      class=" border p-2 hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
    >
      @norriel_fabria
    </HoverCard.Trigger>
    <HoverCard.Content class="w-80">
      <div class="flex justify-center gap-3">
        <Avatar.Root>
          <Avatar.Image src={dev1} />
          <Avatar.Fallback>NF</Avatar.Fallback>
        </Avatar.Root>
        <div class="grid grid-cols-1 justify-center items-center">
          <h4 class="text-normal font-semibold">Hi, I'm Norriel Fabria 👋</h4>
        </div>
      </div>
    </HoverCard.Content>
  </HoverCard.Root>
  
  <HoverCard.Root>
    <HoverCard.Trigger
      href="https://web.facebook.com/nrrlzsxc/"
      target="_blank"
      rel="noreferrer noopener"
      class="border p-2 hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
    >
      @dan_lester
    </HoverCard.Trigger>
    <HoverCard.Content class="w-80">
      <div class="flex justify-center gap-3">
        <Avatar.Root>
          <Avatar.Image src={dev2} />
          <Avatar.Fallback>DZ</Avatar.Fallback>
        </Avatar.Root>
        <div class="grid grid-cols-1 justify-center items-center">
          <h4 class="text-normal font-semibold">Hi, I'm Dan Lester Zapatero 👋</h4>
        </div>
      </div>
    </HoverCard.Content>
  </HoverCard.Root>
  
  <HoverCard.Root>
    <HoverCard.Trigger
      href="https://web.facebook.com/nrrlzsxc/"
      target="_blank"
      rel="noreferrer noopener"
      class="border p-2 hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
    >
      @carl_alvarado
    </HoverCard.Trigger>
    <HoverCard.Content class="w-80">
      <div class="flex justify-center gap-3">
        <Avatar.Root>
          <Avatar.Image src={dev3} />
          <Avatar.Fallback>CJ</Avatar.Fallback>
        </Avatar.Root>
        <div class="grid grid-cols-1 justify-center items-center">
          <h4 class="text-normal font-semibold">Hi, I'm Carl Alvarado 👋</h4>
        </div>
      </div>
    </HoverCard.Content>
  </HoverCard.Root>

  <HoverCard.Root>
    <HoverCard.Trigger
      href="https://web.facebook.com/nrrlzsxc/"
      target="_blank"
      rel="noreferrer noopener"
      class="border p-2 hover:underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
    >
      @jello_parungao
    </HoverCard.Trigger>
    <HoverCard.Content class="w-80">
      <div class="flex justify-center gap-3">
        <Avatar.Root>
          <Avatar.Image src={dev4} />
          <Avatar.Fallback>JP</Avatar.Fallback>
        </Avatar.Root>
        <div class="grid grid-cols-1 justify-center items-center">
          <h4 class="text-normal font-semibold">Hi, I'm JanJello Parungao 👋</h4>
        </div>
      </div>
    </HoverCard.Content>
  </HoverCard.Root>
  </div>