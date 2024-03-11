ServerEvents.recipes((event) => {
  const multiRemovals = [
    "glowstone",
    "glowstone_dust",
    "chiseled_quartz_block",
    "charcoal",
    "coal",
    "diamond",
    "dusts/bauxite",
    "dusts/cinnabar",
    "dusts/niter",
    "ender_pearl",
    "graphite",
    "obsidian",
    "quartz",
    "quartz_bricks",
    "quartz_pillar",
    "quartz_slab",
    "redstone",
    "redstone_block",
    "smooth_quartz",
    "smooth_quartz_slab",
  ];

  multiRemovals.forEach((removal) => {
    event.remove({ id: `alchemistry:combiner/${removal}` });
    event.remove({
      id: `alchemistry:dissolver/${removal}`,
    });
    event.remove({
      id: `alchemistry:compactor/${removal}`,
    });
  });

  // Removals that are specified by ID.
  const idRemovals = [
    // These cause calculation issues that are just better avoided.
    { id: /alchemistry:dissolver\/storage_blocks*/, mod: "alchemistry" },
    { id: /alchemistry:dissolver\/ores*/, mod: "alchemistry" },
  ];

  idRemovals.forEach((removal) => {
    event.remove(removal);
  });
});
