<script>
    // Define props to pass data to the card
    export let data;
</script>
  
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

{#each data.offers as offer}
    <div class="uk-container">
        <div class="uk-card uk-card-default uk-card-body uk-width-1-1 uk-margin-top gradient-bg">
            <div class="uk-child-width-expand uk-grid-small uk-grid-match" uk-grid>
                <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <h3 class="uk-card-title">{offer.dep_time} - {offer.arr_time}</h3>
                        <p>{offer.airline}</p>
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
                        <h3 class="uk-card-title">{offer.dep_time-offer.arr_time}</h3>
                        <p>Duration</p>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-secondary uk-card-body">
                        <h3 class="uk-card-title">Starting at: ${offer.fly_fare}</h3>
                        <p>Class</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/each}
