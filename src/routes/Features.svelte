<script lang='ts'>
    
    import { ArrowRight } from 'lucide-svelte';
    import { ArrowDown } from 'lucide-svelte';
    import { FileText } from 'lucide-svelte';
    import { Hand } from 'lucide-svelte';
    import { TabletSmartphone } from 'lucide-svelte';
</script>

<div class="flex items-center justify-center">
    <div class="grid grid-cols-1 mt-20 border rounded-md sm:mt-10 gap-3 p-4 sm:grid-cols-2">
      <div class="flex items-center justify-center p-3 border rounded-md gap-2">
        <h2 class="flex text-4xl font-bold text-center">Features </h2>
        <ArrowRight class="hidden sm:block"/>
        <ArrowDown class="block sm:hidden"/>
      </div>
      <div class="p-4 border rounded-md">
        <div class="flex items-center justify-start gap-2">
          <FileText />
        <h2 class="text-lg font-bold">Organized</h2>
        </div>
        <p class= "mt-2">find PDF documents of module you need, based on the department and year level.</p>
      </div>
      <div class="p-4 border rounded-md">
        <div class="flex items-center justify-start gap-2">
          <Hand />
        <h2 class="text-lg font-bold">Accessible</h2>
        
        </div>
        <p class="mt-2">access PDF documents of any module from any device and browser.</p>
      </div>
      <div class="p-4 border rounded-md">
        <div class="flex items-center justify-start gap-2">
          <TabletSmartphone />
        <h2 class="text-lg font-bold">Mobile Friendly</h2>
        
        </div>
        <p class="mt-2"> designed for optimal performance on mobile devices.</p>
      </div>
  </div>
  </div>