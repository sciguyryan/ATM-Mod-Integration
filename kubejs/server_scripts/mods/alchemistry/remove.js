ServerEvents.recipes((event) => {
  const removals = [
    { id: "alchemistry:combiner/redstone" },
    { id: "alchemistry:dissolver/redstone" },
    { id: "alchemistry:combiner/redstone_block" },
    { id: "alchemistry:dissolver/redstone_block" },
    { id: "alchemistry:dissolver/glowstone_dust" },
    { id: "alchemistry:combiner/glowstone_dust" },
    { id: "alchemistry:combiner/glowstone" },
    { id: "alchemistry:dissolver/glowstone" },

    // TODO - ensure that all of the Alchemistry dusts behave this way.
    { id: "alchemistry:combiner/iron_disulfide_dust" },
    { id: "alchemistry:compactor/iron_disulfide_dust" },
    { id: "alchemistry:dissolver/iron_disulfide_dust" },
  ];

  removals.forEach((removal) => {
    event.remove(removal);
  });
});
