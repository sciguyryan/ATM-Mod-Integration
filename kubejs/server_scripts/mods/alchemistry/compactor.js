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
    type: "alchemistry:compactor",
    group: "alchemistry:compactor",
    input: {
      count: 16,
      ingredient: {
        item: "chemlib:graphite",
      },
    },
    result: {
      item: "minecraft:coal",
    },
  });

  event.custom({
    type: "alchemistry:compactor",
    group: "alchemistry:compactor",
    input: {
      count: 16,
      ingredient: {
        item: "chemlib:mercury_sulfide",
      },
    },
    result: {
      item: "chemlib:mercury_sulfide_dust",
    },
  });
});
