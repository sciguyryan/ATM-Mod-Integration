ServerEvents.recipes((event) => {
  // This must be done here since the old recipes are removed by ID, meaning
  // our new ones would also be removed when loaded via the datapack.
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
