<script lang="ts">
    import logo from '$lib/images/head-logo.jpg'
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
    import { Button } from "$lib/components/ui/button";
    import { Sun, Moon } from "lucide-svelte";
    import { toggleMode } from "mode-watcher";
  
</script>

<div class="static top-0 border-b p-4 mb-3 mx-auto max-w-4xl sm:mb-8 sm:w-auto">
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
            <img src={logo} alt="cite-logo" class="logo-css" />
            <p class="font-sm">CITE E-MODULE VIEWER</p>
        </div>

        <div class="flex items-center justify-evenly gap-2">
            
            <AlertDialog.Root>
                <AlertDialog.Trigger asChild let:builder>
                    <Button builders={[builder]} variant="outline" size="icon" class="flex font-normal gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content>
                    <AlertDialog.Header>
                        <AlertDialog.Title>About CITE e-module viewer</AlertDialog.Title>
                        <AlertDialog.Description class="font-center">
                            This is a web application that allows users to open and view PDF format of their module based on their department and year level.
                        </AlertDialog.Description>
                    </AlertDialog.Header>
                    <AlertDialog.Footer>
                        <AlertDialog.Action>Continue</AlertDialog.Action>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog.Root>

              <Button on:click={toggleMode} variant="outline" size="icon">
                <Sun
                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Moon
                  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
        </div>
    </div>
</div>

<style>
.logo-css {
    height: 2em;
    width: 2em;
    border-radius: 50%;
}
</style>



