<script>
    import { goto } from '$app/navigation';
    import { Button } from "$lib/components/ui/button";
  </script>
  
  <div>
    <p class="text-2xl p-4 font-medium mt-30 sm:mt-40">SELECT YEAR LEVEL</p>
    <div class="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2">
      <div class="flex items-center justify-center border rounded-md gap-2 h-24 sm:h-28 ">
        <Button on:click={() => goto('/EModule')} variant="secondary" class="flex text-xl text-center h-full w-full">1ST YEAR</Button>  
      </div>
  
      <div class="flex items-center justify-center border rounded-md gap-2 h-24 sm:h-28 ">
        <Button on:click={() => goto('/EModule')} variant="secondary" class="flex text-xl text-center h-full w-full">2ND YEAR</Button>
      </div>
  
      <div class="flex items-center justify-center border rounded-md gap-2 h-24 sm:h-28 ">
        <Button on:click={() => goto('/EModule')} variant="secondary" class="flex text-xl text-center h-full w-full">3RD YEAR</Button>  
      </div>  
  
      <div class="flex items-center justify-center border rounded-md gap-2 h-24 sm:h-28 ">
        <Button on:click={() => goto('/EModule')} variant="secondary" class="flex text-xl text-center h-full w-full">4TH YEAR</Button>  
      </div>
    </div>
  </div>
  