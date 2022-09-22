onEvent('recipes', event => {
    event.remove({output: 'ae2:printed_calculation_processor'})
    event.remove({output: 'ae2:printed_logic_processor'})
    event.remove({output: 'ae2:printed_engineering_processor'})
    event.remove({output: 'ae2:printed_silicon'})

    function circuitPress(input, processor){
        event.custom({
            'type': 'create:deploying',
            "ingredients": [
                {
                    "item": input
                },
                {
                    "item": 'ae2:'+processor+'_press'
                }
            ],
                "results": [
                {
                    "item": 'ae2:printed_'+processor
                }
                ],
                "keepHeldItem": true
                })
       }
            //make this with arrays instead
            circuitPress('ae2:certus_quartz_crystal', 'calculation_processor')
            circuitPress('minecraft:gold_ingot', 'logic_processor')
            circuitPress('minecraft:diamond', 'engineering_processor')
            circuitPress('ae2:silicon', 'silicon')
})

