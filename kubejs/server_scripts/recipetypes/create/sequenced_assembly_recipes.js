const inc_fluix_mech = 'kubejs:refined_fluix_mechanism'
const fluix_mech = 'kubejs:refined_fluix_mechanism'

const processors = ['calculation', 'logic', 'engineering']

onEvent('recipes', event => {
    event.remove({output: 'ae2:calculation_processor'})
    event.remove({output: 'ae2:logic_processor'})
    event.remove({output: 'ae2:engineering_processor'})

    function processorRecipe(type){
        event.recipes.createSequencedAssembly('ae2:'+type+'_processor', 'ae2:printed_'+type+'_processor', [
                event.recipes.createDeploying('ae2:printed_'+type+'_processor', ['ae2:printed_'+type+'_processor', 'minecraft:redstone']),
                event.recipes.createDeploying('ae2:printed_'+type+'_processor', ['ae2:printed_'+type+'_processor', 'ae2:printed_silicon']),
                event.recipes.createPressing('ae2:printed_'+type+'_processor', 'ae2:printed_'+type+'_processor')
            ]).transitionalItem('ae2:printed_'+type+'_processor').loops(1)
    }

    event.recipes.createSequencedAssembly(fluix_mech, 'create:precision_mechanism', [
        event.recipes.createDeploying(inc_fluix_mech, [inc_fluix_mech, 'ae2:fluix_pearl']),
        event.recipes.createPressing(inc_fluix_mech, inc_fluix_mech),
        event.recipes.createFilling(inc_fluix_mech, [inc_fluix_mech, Fluid.of('minecraft:lava', 1000)]),
        event.recipes.createPressing(inc_fluix_mech, inc_fluix_mech)
    ]).transitionalItem(inc_fluix_mech).loops(4)

    processors.forEach(processorRecipe)
})
