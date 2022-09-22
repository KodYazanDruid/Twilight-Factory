onEvent('recipes', event => {
    //Input = The block you right click on.
    //Applicant = The item you right click with.
    //Output = The block that transformed.
    function applicationRecipe(input, output, applicant){
        event.custom({
            "type": "create:item_application",
                "ingredients": [
                {
                    "item": input
                },
                {
                    "item": applicant
                }],
                "results": [{
                    "item": output
                }]
        })
    }

    applicationRecipe('kubejs:crude_controller', 'ae2:controller', 'kubejs:refined_fluix_mechanism')
    applicationRecipe('minecraft:beacon', 'createchunkloading:chunk_loader', 'ae2:spatial_anchor')
})