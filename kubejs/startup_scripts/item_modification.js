onEvent('item.modification', event => {
    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })

    event.modify('enigmaticlegacy:recall_potion', item => {
        item.maxStackSize = 16
    })

    event.modify('enigmaticlegacy:mending_mixture', item => {
        item.maxStackSize = 16
    })
})