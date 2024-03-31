<script lang="ts">
    import { Button, buttonVariants } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Select from "$lib/components/ui/select";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { goto } from '$app/navigation'; // Import for redirects
    
    const department = [
      {
        value: "IT",
        label: "IT"
      },
      {
        value: "CE",
        label: "CE"
      }
    ];
  
    let studentId = '';
    let name = '';
  
    let studentIdError: string = '';
  
    function handleSubmit() {
      // Perform validation
      studentIdError = ''; // Clear any previous errors
      const pattern = /^[0-9-]+$/; // Regex to match numbers and hyphens
      if (!pattern.test(studentId)) {
        // Use studentId directly (no need for $ prefix in Svelte stores)
        studentIdError = 'Student ID must only contain numbers and dash.';
        return; // Prevent submission if validation fails
      }
      // Redirect to the next page
      goto('./Year/');
    }
  </script>
  
  <div class="grid justify-center mt-0 sm:mt-2">
    
    <Dialog.Root >
      <Dialog.Trigger class={buttonVariants({ variant: "secondary", size: "lg", })}
        >Get Started</Dialog.Trigger
      >
      <Dialog.Content class="sm:max-w-[445px]">
        <Dialog.Header>
          <Dialog.Title>Confirm student info</Dialog.Title>
          
        </Dialog.Header>
        <div class="grid gap-3 py-2 text-right">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" >ID:</Label>
            <Input id="username" bind:value={studentId} autocomplete="true" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" >Name (Optional)</Label>
            <Input id="name" bind:value={name} class="col-span-3"  />
          </div>
          
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="department" >Department</Label>
            <Select.Root >
              <Select.Trigger id="department" class="col-span-3">
                <Select.Value placeholder="Select" />
              </Select.Trigger>
              <Select.Content>
                {#each department as department}
                  <Select.Item value={department.value} label={department.label}
                    >{department.label}</Select.Item
                  >
                {/each}
              </Select.Content>
            </Select.Root>
          </div>
        </div>
        <Dialog.Footer>
          <Button type="submit" on:click={handleSubmit}>Continue</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  </div>
  