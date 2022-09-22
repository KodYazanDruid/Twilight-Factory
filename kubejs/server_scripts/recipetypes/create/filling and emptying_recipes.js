onEvent('recipes', event => {
    event.recipes.createFilling('twilightforest:fiery_ingot', [
        'minecraft:iron_ingot',
        Fluid.of('kubejs:fiery_fluid', 250)
    ])

    event.recipes.createEmptying([
        'minecraft:glass_bottle',
        Fluid.of('kubejs:fiery_fluid', 250)
    ],
        '#twilightforest:fiery_vial'
    )
})