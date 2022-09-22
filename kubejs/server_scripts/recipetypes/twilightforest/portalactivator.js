onEvent('item.tags', event => {
    event.get('twilightforest:portal/activator').add('kubejs:refined_fluix_mechanism')
    event.get('twilightforest:portal/activator').remove('minecraft:diamond')
})