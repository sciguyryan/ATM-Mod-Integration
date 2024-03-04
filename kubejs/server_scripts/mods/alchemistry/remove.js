ServerEvents.recipes((event) => {
  const removals = [
    { id: "alchemistry:dissolver/redstone" },
    { id: "alchemistry:dissolver/redstone_block" },
    { id: "alchemistry:combiner/redstone" },
    { id: "alchemistry:combiner/redstone_block" },
    { id: "alchemistry:dissolver/glowstone_dust" },
    { id: "alchemistry:dissolver/glowstone" },
    { id: "alchemistry:combiner/glowstone_dust" },
    { id: "alchemistry:combiner/glowstone" },
  ];

  removals.forEach((removal) => {
    event.remove(removal);
  });
});
