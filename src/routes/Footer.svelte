<script lang="ts">
    import { Separator } from "$lib/components/ui/separator";
    import * as Avatar from "$lib/components/ui/avatar";
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
    import Dev from './Dev.svelte'
  </script>
  
  
  
  
  <footer class="static bottom-0 flex border-t p-4 w-full mx-auto max-w-4xl mt-auto">
    <div>
        <div class="space-y-1">
          <h4 class="text-sm font-medium leading-none">Stack © 2024 </h4>
        </div>
        <Separator class="my-4" />
        <div class="flex h-5 items-center space-x-4 text-sm">
          <Avatar.Root>
            <Avatar.Image src="https://github.com/sveltejs.png" alt="@sveltejs" />
            <Avatar.Fallback>SV</Avatar.Fallback>
          </Avatar.Root>
          <Separator orientation="vertical" />
          <Avatar.Root>
            <Avatar.Image src="https://github.com/tailwindcss.png" alt="@sveltejs" />
            <Avatar.Fallback>TW</Avatar.Fallback>
          </Avatar.Root>
          <Separator orientation="vertical" />
          <div>
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild let:builder>
                <Button builders={[builder]} variant="ghost" size="icon" class="font-normal">DEV</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content>
                <AlertDialog.Header>
                  <AlertDialog.Title class="flex justify-center items-center">DEV TEAM</AlertDialog.Title>
                  <AlertDialog.Description class="font-center">
                   <Dev/>
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                  <AlertDialog.Action>Continue</AlertDialog.Action>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog.Root>
            
            
          </div>
        </div>
      </div>
  </footer>