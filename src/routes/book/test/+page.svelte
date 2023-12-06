<!-- FlightOffers.svelte -->
<script>
    import { onMount } from 'svelte';
    import Database from 'better-sqlite3';
   
    let flightOffers = [];
   
    onMount(async () => {
      try {
        const db = new Database('C:\\Users\\Everest\\Desktop\\flyfare-app\\flightoffers.sqlite');
        const query = 'SELECT * FROM flightoffers';
        flightOffers = db.prepare(query).all();
        db.close();
      } catch (error) {
        console.error('Error accessing the database:', error);
        // Handle the error here (e.g., show a message to the user)
      }
    });
   </script>
   
   <h1>Flight Offers</h1>
   <ul>
    {#each flightOffers as offer}
      <li>
        Airline: {offer.airline}, Arrival City Code: {offer.arr_city_code}, Departure City Code: {offer.dep_city_code}
        <!-- Display other fields as needed -->
      </li>
    {/each}
   </ul>
   