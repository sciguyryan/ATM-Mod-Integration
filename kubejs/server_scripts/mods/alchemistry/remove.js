ServerEvents.recipes((event) => {
  const removals = [
    "redstone",
    "redstone_block",
    "glowstone_dust",
    "glowstone",
    "quartz_slab",
    "smooth_quartz_slab",
    "chiseled_quartz_block",
    "quartz_bricks",
    "quartz_pillar",
    "smooth_quartz",
    "diamond",
    "charcoal",
    "coal",
    "obsidian",
    "quartz",
    "graphite",
    "dusts/bauxite",
    "dusts/cinnabar",
    "dusts/niter",
  ];

  removals.forEach((removal) => {
    event.remove({ id: `alchemistry:combiner/${removal}` });
    event.remove({
      id: `alchemistry:dissolver/${removal}`,
    });
    event.remove({
      id: `alchemistry:compactor/${removal}`,
    });
  });

  const regex_removals = [
    // These cause calculation issues that are just better avoided.
    { id: /alchemistry:dissolver\/storage_blocks*/ },
    { id: /alchemistry:dissolver\/ores*/ },
  ];

  regex_removals.forEach((removal) => {
    event.remove(removal);
  });
});
