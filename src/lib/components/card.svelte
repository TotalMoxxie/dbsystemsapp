
<script>
    // Define props to pass data to the card
    export let title;
    export let description;
    export let imageUrl;
  </script>
  
  <style>
    /* CSS styles for the card */
    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .card-title {
      font-weight: bold;
      margin-bottom: 8px;
    }
  
    .card-description {
      color: #666;
    }
  
    .card-image {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin-top: 12px;
    }
  </style>
  
  <div class="card">
    {#if imageUrl}
      <img class="card-image" src={imageUrl} alt="Card Image" />
    {/if}
    <h2 class="card-title">{title}</h2>
    <p class="card-description">{description}</p>
  </div>
  