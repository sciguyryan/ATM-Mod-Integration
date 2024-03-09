ServerEvents.recipes((event) => {
  event.custom({
    type: "alchemistry:compactor",
    group: "alchemistry:compactor",
    input: {
      count: 16,
      ingredient: {
        item: "chemlib:graphite",
      },
    },
    result: {
      item: "minecraft:charcoal",
    },
  });

  event.custom({
    type: "forge:conditional",
    recipes: [
      {
        conditions: [
          {
            type: "forge:not",
            value: {
              type: "forge:tag_empty",
              tag: "forge:dusts/graphite",
            },
          },
        ],
        recipe: {
          type: "alchemistry:compactor",
          group: "alchemistry:compactor",
          input: {
            count: 16,
            ingredient: {
              tag: "forge:dusts/graphite",
            },
          },
          result: {
            item: "minecraft:diamond",
          },
        },
      },
    ],
  });
});
