<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";
    import * as Table from "$lib/components/ui/table";
    import * as Select from "$lib/components/ui/select";
    import { Button } from "$lib/components/ui/button";
    import { onMount } from 'svelte';
  
    const subjects = [
      { value: "subject1", label: "Subject1" },
      { value: "subject2", label: "Subject2" },
      { value: "subject3", label: "Subject3" },
    ];
  
    function openPdfInBrowser() {
    window.open('/ITE335-001-005.pdf', '_blank');
  }
  </script>
  
  <div>
    <Tabs.Root value="account" class="w-auto sm:w-3/4 lg:w-3/4 mx-auto p-3 ">
      <Tabs.List class='grid grid-cols-2 items-center'>
        <Tabs.Trigger value="first-sem">1st sem</Tabs.Trigger>
        <Tabs.Trigger value="second-sem">2nd sem</Tabs.Trigger>
      </Tabs.List>
  
      <Tabs.Content value="first-sem">
        <Table.Root>
          <Table.Caption>A list of pdf module</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head>
                <Select.Root>
                  <Select.Trigger class="w-40">
                    <Select.Value placeholder="Select subject" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Group>
                      <Select.Label>Subject</Select.Label>
                      {#each subjects as subject}
                      <Select.Item value={subject.value} label={subject.label}>
                        {subject.label}
                      </Select.Item>
                      {/each}
                    </Select.Group>
                  </Select.Content>
                  <Select.Input name="subject" />
                </Select.Root>
              </Table.Head>
              <Table.Head>Module #</Table.Head>
              <Table.Head>Title</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row on:click={openPdfInBrowser}>
              <Table.Cell>subj1</Table.Cell>
              <Table.Cell>sas01</Table.Cell>
              <Table.Cell>Introduction</Table.Cell>
              <Table.Cell>
                <Button variant="ghost" size="icon" class="flex font-normal gap-1">View</Button>
              </Table.Cell>
            </Table.Row>
            <!-- Repeat similar structure for other rows if needed -->
          </Table.Body>
        </Table.Root>
      </Tabs.Content>
  
      <!-- Add more Tabs.Content blocks if needed for other semesters -->
    </Tabs.Root>
  </div>
  