onEvent('recipes', event => {
    event.remove({output: 'twilightforest:raw_ironwood'})
    event.recipes.createMixing('4x twilightforest:raw_ironwood',['minecraft:gold_ingot' ,'minecraft:raw_iron' ,'twilightforest:liveroot']).heated()
})