onEvent('block.loot_tables', event => {
    event.build('bigreactors:yellorite_ore', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.survivesExplosion
            pool.addEntry({
                "type": "minecraft:alternatives",
                    "children": [{
                    "type": "minecraft:item",
                    "conditions": [
                      {
                        "condition": "minecraft:match_tool",
                        "predicate": {
                          "enchantments": [
                            {
                            "enchantment": "minecraft:silk_touch",
                            "levels": {
                                "min": 1
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "name": "bigreactors:yellorite_ore"
                  },
                  {
                    "type": "minecraft:item",
                    "functions": [
                      {
                        "function": "minecraft:apply_bonus",
                        "enchantment": "minecraft:fortune",
                        "formula": "minecraft:ore_drops"
                       },
                      {
                        "function": "minecraft:explosion_decay"
                      }
                    ],
                    "name": "kubejs:raw_uranium"
                    }
                ]
            })
        })
    })
})

/*
onEvent("lootjs", (event) => {
    event
        .addBlockLootModifier("bigreactors:yellorite_ore")
        .removeLoot("bigreactors:yellorite_ore")
        .pool((p) => {
            p.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune"));
            p.addLoot("kubejs:raw_uranium");
            p.applyBonus("minecraft:fortune", 1);
           })
        .pool((p) => {
            p.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"));
            p.addLoot("bigreactors:yellorite_ore");
           })
        .pool(p => {
            p.not(n => n.matchMainHand(ItemFilter.hasEnchantment(["minecraft:silk_touch", "minecraft:fortune"])));
            p.addLoot("kubejs:raw_uranium");
           });
   });
/*
onEvent("lootjs", (event) => {
    event
        .addBlockLootModifier("bigreactors:yellorite_ore")
        .removeLoot("bigreactors:yellorite_ore")
        .apply((ctx) => {
            let player = ctx.player;
            if (!player) return;

            if (ItemFilter.hasEnchantment("minecraft:silk_touch").test(player.mainHandItem)) {
                ctx.addLoot("bigreactors:yellorite_ore");
                return;
            }

            let uraniumItem = LootEntry.of("kubejs:raw_uranium");
            if (ItemFilter.hasEnchantment("minecraft:fortune").test(player.mainHandItem)) {
                uraniumItem.applyBonus("minecraft:fortune", 1);
            }
            ctx.addLoot(uraniumItem);
        });
});*/
