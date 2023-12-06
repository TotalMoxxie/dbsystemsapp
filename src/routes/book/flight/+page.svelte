<script>
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';

  let data = [];
  let depCity = '';
  let arrCity = '';
  let date = '';

  const fetchData = async () => {
    const { data: records, error } = await supabase
      .from('flightoffers')
      .select('*')
      .eq('dep_city_code', depCity)
      .eq('arr_city_code', arrCity)
      .eq('dep_date', date);

    if (error) {
      console.error(error);
    } else {
      data = records;
    }
  };

  const handleSubmit = async () => {
    await fetchData();
  };

  onMount(() => {
    // Fetch initial data when the component mounts
    fetchData();
  });
</script>

<style>
  /* Your component-specific styles here */
  .gradient-bg {
    background: linear-gradient(to right, orange, white);
    display: block;
  }
</style>

<div class="uk-container">
  <div class="uk-margin-top">
    <form on:submit|preventDefault={handleSubmit}>
      <div class="uk-grid uk-child-width-1-2@s uk-margin-bottom">
        <div>
          <input bind:value={depCity} class="uk-input" type="text" placeholder="Departure City" aria-label="Departure City">
        </div>
        <div>
          <input bind:value={arrCity} class="uk-input" type="text" placeholder="Arrival City" aria-label="Arrival City">
        </div>
      </div>
      <div class="uk-margin-bottom">
        <input bind:value={date} class="uk-input" type="date">
      </div>
      <div>
        <button type="submit" class="uk-button uk-button-primary">Search</button>
      </div>
    </form>
  </div>

  <div class="uk-grid uk-margin-top">
    {#each data as item}
      <div key={item.id}>
        <div class="uk-card uk-card-default uk-card-body uk-margin-bottom gradient-bg">
          <div class="uk-child-width-expand uk-grid-small uk-grid-match" uk-grid>
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <h3 class="uk-card-title">{item.dep_time} - {item.arr_time}</h3>
                <p>{item.airline}</p>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-primary uk-card-body">
                <h3 class="uk-card-title">1 stop</h3>
                <p>{item.arr_city_code}</p>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-secondary uk-card-body">
                <h3 class="uk-card-title">{item.duration}</h3>
                <p>Duration</p>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-secondary uk-card-body">
                <h3 class="uk-card-title">Starting at: ${item.fly_fare}</h3>
                <p>Class</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
