<script>
    import { supabase } from '$lib/supabase';
  
    let data = [];
  
    const fetchData = async () => {
      const { data: records, error } = await supabase.from('flightoffers').select('*');
      if (error) {
        console.error(error);
      } else {
        data = records;
      }
    };
  
    fetchData()
</script>
  
<ul>
    {#each data as item}
        <li>{item.airline}</li>
    {/each}
</ul>
  


  