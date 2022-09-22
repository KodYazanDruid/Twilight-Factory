onEvent('recipes', event => {
    const cellVolumes = ['1k', '4k', '16k', '64k', '256k']
    const spatialVolumes = ['2', '16', '128']

    const ironwood = 'twilightforest:ironwood_ingot'

    //Removed recipes.
    //Applied Energistics 2 removed
    event.remove({output: 'ae2:controller'})
    event.remove({id: 'ae2:network/blocks/interfaces_interface'})
    event.remove({id: 'ae2:network/blocks/pattern_providers_interface'})
    event.remove({output: 'ae2:import_bus'})
    event.remove({output: 'ae2:export_bus'})
    event.remove({output: 'ae2:drive'})
    event.remove({output: 'ae2:crafting_unit'})
    event.remove({output: 'ae2:molecular_assembler'})
    //Big Reactors removed
    event.remove({input: 'bigreactors:yellorite_ore', type: 'minecraft:blasting'})
    event.remove({input: 'bigreactors:yellorite_ore', type: 'minecraft:smelting'})
    //Chunk Loaders removed
    event.remove({output: 'chunkloaders:single_chunk_loader'})
    //Twilight Forest removed
    event.remove({input: '#twilightforest:fiery_vial', type: 'minecraft:smithing'})
    event.remove({input: '#twilightforest:fiery_vial', type: 'minecraft:crafting_shapeless'})
    //Enigmatic Legacy removed
    event.remove({output: 'enigmaticlegacy:forbidden_axe'})
    event.remove({output: 'enigmaticlegacy:mending_mixture'})
    event.remove({output: 'enigmaticlegacy:animal_guide'})
    event.remove({output: 'enigmaticlegacy:monster_charm'})
    
    //Custom Recipes
    //Enigmatic Legacy
    event.shaped('enigmaticlegacy:forbidden_axe', [
        'NSN',
        'BDB',
        ' R '
    ], {
        N: 'minecraft:netherite_ingot',
        S: 'minecraft:wither_skeleton_skull',
        B: 'twilightforest:borer_essence',
        D: 'twilightforest:diamond_minotaur_axe',
        R: 'enigmaticlegacy:ender_rod'
    })

    event.shaped('4x enigmaticlegacy:mending_mixture', [
        'PMP',
        'MBM',
        'PMP'
    ], {
        P: Item.of('minecraft:potion', '{Potion:"minecraft:strong_regeneration"}'),
        M: 'minecraft:phantom_membrane',
        B: Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1)
    })

    event.shaped('4x enigmaticlegacy:recall_potion', [
        'SPS',
        'PRP',
        'SPS'
    ], {
        S: Item.of('minecraft:potion', '{Potion:"minecraft:strong_swiftness"}'),
        P: 'minecraft:ender_pearl',
        R: 'minecraft:respawn_anchor'
    }).keepIngredient('minecraft:respawn_anchor')

    event.shaped('enigmaticlegacy:animal_guide', [
        ' F ',
        'TBT',
        ' C '
    ], {
        F: 'twilightforest:firefly',
        T: 'twilightforest:torchberries',
        B: 'minecraft:book',
        C: 'twilightforest:charm_of_life_1'
    })

    event.shaped('enigmaticlegacy:monster_charm', [
        'N N',
        'BSB',
        'N N'
    ], {
        N: 'minecraft:netherite_ingot',
        B: 'create:brass_ingot',
        S: 'minecraft:skeleton_skull'
    })

    //Twilight Forest
	event.shapeless(ironwood, '9x kubejs:ironwood_nugget')
	event.shapeless('9x kubejs:ironwood_nugget', ironwood)

	//Chunk loaders
	event.remove({output: 'chunkloaders:basic_chunk_loader'})
	event.shaped('chunkloaders:basic_chunk_loader', [
	    'KOK',
	    'OSO',
	    'KOK'
	], {
	    K: 'twilightforest:knightmetal_ingot',
	    O: 'minecraft:obsidian',
	    S: 'ae2:spatial_anchor'
	})



	//Applied Energistics 2
	function cellCraft(type, volume){
	    event.remove({output: 'ae2:'+type+'_storage_cell_'+volume})
	    if(type!='spatial'){
	        event.shaped('ae2:'+type+'_storage_cell_'+volume, [
	            'QRQ',
	            'QCQ',
	            'III'
	        ], {
	            Q: 'ae2:quartz_glass',
	            R: 'minecraft:redstone',
	            C: 'ae2:cell_component_'+volume,
	            I: ironwood
	        })
	    }
	    if(type=='spatial'){
	        event.shaped('ae2:'+type+'_storage_cell_'+volume, [
                'QRQ',
        	    'QCQ',
        	    'III'
            ], {
                Q: 'ae2:quartz_glass',
        	    R: 'minecraft:redstone',
        	    C: 'ae2:spatial_cell_component_'+volume,
        	    I: ironwood
            })
        }
	}
	event.remove({output: 'ae2:item_cell_housing'})
    event.shaped('ae2:item_cell_housing', [
    	'QRQ',
    	'Q Q',
        'III'
    ], {
        Q: 'ae2:quartz_glass',
    	R: 'minecraft:redstone',
    	I: ironwood
    })
    event.remove({output: 'ae2:view_cell'})
    event.shaped('ae2:view_cell', [
        'QRQ',
        'QCQ',
        'III'
    ], {
      Q: 'ae2:quartz_glass',
      R: 'minecraft:redstone',
      C: '#forge:gems/certus_quartz',
      I: ironwood
    })

    function emptyCellCraft(type, volume){
        if(type!='spatial'){
            event.shapeless('ae2:'+type+'_storage_cell_'+volume, ['ae2:item_cell_housing', 'ae2:cell_component_'+volume])
        }
        if(type=='spatial'){
            event.shapeless('ae2:'+type+'_storage_cell_'+volume, ['ae2:item_cell_housing', 'ae2:'+type+'_cell_component_'+volume])
        }
    }

    cellVolumes.forEach(e =>{
        cellCraft('item', e)
        emptyCellCraft('item', e)
    })
    spatialVolumes.forEach(e =>{
        cellCraft('spatial', e)
        emptyCellCraft('spatial', e)
    })

    event.shaped('ae2:interface', [
        'IGI',
        'A F',
        'IGI'
    ], {
        I: ironwood,
        G: 'minecraft:glass',
        A: 'ae2:annihilation_core',
        F: 'ae2:formation_core'
    })

    event.shaped('ae2:molecular_assembler', [
        'IQI',
        'ACF',
        'IQI'
    ], {
        I: ironwood,
        C: 'minecraft:crafting_table',
        A: 'ae2:annihilation_core',
        F: 'ae2:formation_core',
        Q: 'ae2:quartz_glass'
    })

    event.shaped('ae2:pattern_provider', [
            'ICI',
            'A F',
            'ICI'
        ], {
            I: ironwood,
            C: 'minecraft:crafting_table',
            A: 'ae2:annihilation_core',
            F: 'ae2:formation_core'
        })

    event.shaped('ae2:import_bus', [
        ' A ',
        'ISI'
    ], {
        I: ironwood,
        S: 'minecraft:sticky_piston',
        A: 'ae2:annihilation_core'
    })

    event.shaped('ae2:export_bus', [
        'IFI',
        ' P '
    ], {
        I: ironwood,
        P: 'minecraft:piston',
        F: 'ae2:formation_core'
    })

    event.shaped('ae2:drive', [
        'IEI',
        'F F',
        'IEI'
    ], {
        I: ironwood,
        E: 'ae2:engineering_processor',
        F: 'ae2:fluix_glass_cable'
    })

    event.shaped('ae2:crafting_unit', [
        'ICI',
        'FLF',
        'ICI'
    ], {
        I: ironwood,
        C: 'ae2:calculation_processor',
        F: 'ae2:fluix_glass_cable',
        L: 'ae2:logic_processor'
    })


})