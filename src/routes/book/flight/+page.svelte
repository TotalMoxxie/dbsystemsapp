<form class="uk-margin-left uk-margin-top">
    <fieldset class="uk-fieldset">
        <legend class="uk-legend uk-margin-bottom">Book a Flight</legend>
        <div class="uk-grid" uk-grid>
            <div class="uk-width-5-6">
                <div class="uk-grid-collapse" uk-grid>
                    <div class="uk-width-1-3">
                        <input class="uk-input" type="text" placeholder="MAF" aria-label="25">
                    </div>
                    <div class="uk-width-1-3">
                        <input class="uk-input" type="text" placeholder="AUS" aria-label="25">
                    </div>
                    <div class="uk-width-1-3">
                        <input class="uk-input" type="date">
                    </div>
                </div>
            </div>
            <div >
                <button class="uk-button uk-button-primary">Search</button>
            </div>
        </div>
    </fieldset>
</form>

<style>
    /* Your component-specific styles here */
    .gradient-bg {
      background: linear-gradient(to right, orange, white);
      /* Other card styles */
      /* If you need to ensure the gradient spans the entire card */
      /* You can set the display property to inline-block or block */
      /* For example: */
      display: block;
    }
  </style>

<div class="uk-container">
    <div class="uk-card uk-card-default uk-card-body uk-width-1-1 uk-margin-top gradient-bg">
        <div class="uk-child-width-expand uk-grid-small uk-grid-match" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">HH:MM - HH:MM</h3>
                    <p>Airline</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-primary uk-card-body">
                    <h3 class="uk-card-title">1 stop</h3>
                    <p>AAA</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-secondary uk-card-body">
                    <h3 class="uk-card-title">00:00</h3>
                    <p>Duration</p>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-secondary uk-card-body">
                    <h3 class="uk-card-title">Starting at: $100</h3>
                    <p>Class</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ExamplePage.svelte -->

<script>
    // Import the Card component
    import FOCard from '$lib/components/flight_offer_card.svelte';
</script>

<FOCard />
  