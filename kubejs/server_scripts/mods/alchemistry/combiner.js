ServerEvents.recipes((event) => {
  event.custom({
    type: 'alchemistry:combiner',
    group: 'alchemistry:combiner',
    input: [
      {
        count: 16,
        ingredient: {
          item: 'chemlib:magnesium',
        },
      },
      {
        count: 16,
        ingredient: {
          item: 'chemlib:iron',
        },
      },
      {
        count: 32,
        ingredient: {
          item: 'chemlib:silicon',
        },
      },
      {
        count: 64,
        ingredient: {
          item: 'chemlib:oxygen',
        },
      },
    ],
    result: {
      count: 8,
      item: 'minecraft:obsidian',
    },
  });
});
