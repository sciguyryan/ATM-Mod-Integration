ServerEvents.recipes((event) => {
  const removals = [
    { id: "alchemistry:dissolver/redstone" },
    { id: "alchemistry:dissolver/redstone_block" },
    { id: "alchemistry:combiner/redstone" },
    { id: "alchemistry:combiner/redstone_block" },
  ];

  removals.forEach((removal) => {
    event.remove(removal);
  });
});
