ServerEvents.recipes((event) => {
  const removals = [
    { id: 'alchemistry:combiner/redstone' },
    { id: 'alchemistry:dissolver/redstone' },
    { id: 'alchemistry:combiner/redstone_block' },
    { id: 'alchemistry:dissolver/redstone_block' },
    { id: 'alchemistry:dissolver/glowstone_dust' },
    { id: 'alchemistry:combiner/glowstone_dust' },
    { id: 'alchemistry:combiner/glowstone' },
    { id: 'alchemistry:dissolver/glowstone' },

    // TODO - ensure that all of the Alchemistry dusts behave this way.
    { id: 'alchemistry:combiner/iron_disulfide_dust' },
    { id: 'alchemistry:compactor/iron_disulfide_dust' },
    { id: 'alchemistry:dissolver/iron_disulfide_dust' },
    { id: 'alchemistry:combiner/calcium_carbonate_dust' },
    { id: 'alchemistry:compactor/calcium_carbonate_dust' },
    { id: 'alchemistry:dissolver/calcium_carbonate_dust' },
    { id: 'alchemistry:combiner/tin_oxide_dust' },
    { id: 'alchemistry:compactor/tin_oxide_dust' },
    { id: 'alchemistry:dissolver/tin_oxide_dust' },
    { id: 'alchemistry:dissolver/mercury_sulfide_dust' },
    { id: 'alchemistry:compactor/mercury_sulfide_dust', mod: 'alchemistry' },
    { id: 'alchemistry:dissolver/mercury_sulfide_dust' },
    { id: 'alchemistry:combiner/mercury_sulfide_dust' },
    { id: 'alchemistry:dissolver/diamond', mod: 'alchemistry' },
    { id: 'alchemistry:combiner/graphite_dust' },
    { id: 'alchemistry:compactor/graphite_dust' },
    { id: 'alchemistry:dissolver/graphite_dust' },
    { id: 'alchemistry:compactor/charcoal' },
    { id: 'alchemistry:dissolver/charcoal', mod: 'alchemistry' },
    { id: 'alchemistry:compactor/coal' },
    { id: 'alchemistry:dissolver/coal', mod: 'alchemistry' },
    { id: 'alchemistry:combiner/lead_sulfide_dust' },
    { id: 'alchemistry:compactor/lead_sulfide_dust' },
    { id: 'alchemistry:dissolver/lead_sulfide_dust' },
    { id: 'alchemistry:combiner/nickel_oxide_dust' },
    { id: 'alchemistry:compactor/nickel_oxide_dust' },
    { id: 'alchemistry:dissolver/nickel_oxide_dust' },
    { id: 'alchemistry:combiner/magnesium_carbonate_dust' },
    { id: 'alchemistry:compactor/magnesium_carbonate_dust' },
    { id: 'alchemistry:dissolver/magnesium_carbonate_dust' },
    { id: 'alchemistry:combiner/obsidian', mod: 'alchemistry' },

    // These cause calculation issues that are just better avoided.
    { id: /alchemistry:dissolver\/storage_blocks*/ },
  ];

  removals.forEach((removal) => {
    event.remove(removal);
  });
});
