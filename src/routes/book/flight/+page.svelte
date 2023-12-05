<div>
    <form class="uk-flex uk-flex-center uk-grid-collapse uk-margin-left uk-margin-right uk-margin-top" uk-grid>
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
            <button class="uk-button uk-button-primary"><span uk-search-icon></span>Search</button>
        </div>
    </form>
</div>

<div>
    <form>
        <fieldset class="uk-fieldset">
    
            <legend class="uk-legend">Legend</legend>
    
            <div class="uk-margin">
                <input class="uk-input" type="text" placeholder="Input" aria-label="Input">
            </div>
    
            <div class="uk-margin">
                <select class="uk-select" aria-label="Select">
                    <option>Option 01</option>
                    <option>Option 02</option>
                </select>
            </div>
    
            <div class="uk-margin">
                <textarea class="uk-textarea" rows="5" placeholder="Textarea" aria-label="Textarea"></textarea>
            </div>
    
            <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label><input class="uk-radio" type="radio" name="radio2" checked> A</label>
                <label><input class="uk-radio" type="radio" name="radio2"> B</label>
            </div>
    
            <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label><input class="uk-checkbox" type="checkbox" checked> A</label>
                <label><input class="uk-checkbox" type="checkbox"> B</label>
            </div>
    
            <div class="uk-margin">
                <input class="uk-range" type="range" value="2" min="0" max="10" step="0.1" aria-label="Range">
            </div>
    
        </fieldset>
    </form>
</div>