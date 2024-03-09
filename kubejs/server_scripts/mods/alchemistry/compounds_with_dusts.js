const AMOUNT_PER_DUST = 16;

const COMPOUNDS_WITH_DUSTS = [
  "acetylsalicylic_acid",
  "aluminum_hydroxide",
  "aluminum_nitrate",
  "aluminum_oxide",
  "amide",
  "ammonium_chloride",
  "antimony_trioxide",
  "antimony_trisulfide",
  "barium_carbonate",
  "barium_chloride",
  "barium_hydroxide",
  "barium_nitrate",
  "barium_oxide",
  "barium_sulfide",
  "beryl",
  "beryllium_carbonate",
  "beryllium_chloride",
  "beryllium_hydroxide",
  "beryllium_nitrate",
  "beryllium_oxide",
  "beryllium_sulfate",
  "beta_carotene",
  "cadmium_carbonate",
  "cadmium_hydroxide",
  "cadmium_nitrate",
  "cadmium_sulfate",
  "cadmium_sulfide",
  "caffeine",
  "calcium_carbonate",
  "calcium_chloride",
  "calcium_hydroxide",
  "calcium_nitrate",
  "calcium_oxide",
  "calcium_sulfate",
  "carbonate",
  "cellulose",
  "cesium_carbonate",
  "cesium_chloride",
  "cesium_hydroxide",
  "cesium_nitrate",
  "cesium_sulfate",
  "chitin",
  "chromium_oxide",
  "cobalt_aluminate",
  "cobalt_carbonate",
  "cobalt_nitrate",
  "cobalt_sulfate",
  "copper_carbonate",
  "copper_i_oxide",
  "copper_i_sulfide",
  "copper_ii_hydroxide",
  "copper_ii_sulfate",
  "copper_nitrate",
  "cucurbitacin",
  "diammonium_phosphate",
  "graphite",
  "hydroxide",
  "iron_carbonate",
  "iron_disulfide",
  "iron_ii_oxide",
  "iron_ii_sulfate",
  "iron_iii_nitrate",
  "iron_oxide",
  "keratin",
  "lead_carbonate",
  "lead_nitrate",
  "lead_oxide",
  "lead_sulfate",
  "lead_sulfide",
  "lithium_carbonate",
  "lithium_chloride",
  "lithium_hydroxide",
  "lithium_nitrate",
  "lithium_oxide",
  "lithium_sulfate",
  "magnesium_carbonate",
  "magnesium_chloride",
  "magnesium_hydroxide",
  "magnesium_nitrate",
  "magnesium_oxide",
  "manganese_carbonate",
  "manganese_hydroxide",
  "manganese_nitrate",
  "manganese_oxide",
  "manganese_sulfate",
  "mercury_sulfide",
  "mullite",
  "nickel_carbonate",
  "nickel_chloride",
  "nickel_nitrate",
  "nickel_oxide",
  "nickel_sulfate",
  "nickel_sulfide",
  "nitrate",
  "phosphate",
  "phosphoric_acid",
  "polyvinyl_chloride",
  "potassium_carbonate",
  "potassium_chloride",
  "potassium_cyanide",
  "potassium_ethyl_xanthate",
  "potassium_hydroxide",
  "potassium_nitrate",
  "potassium_oxide",
  "potassium_sulfate",
  "rubidium_carbonate",
  "rubidium_chloride",
  "rubidium_hydroxide",
  "rubidium_nitrate",
  "rubidium_oxide",
  "rubidium_sulfate",
  "sodium_bisulfate",
  "sodium_carbonate",
  "sodium_chloride",
  "sodium_hydroxide",
  "sodium_nitrate",
  "sodium_oxide",
  "sodium_sulfate",
  "starch",
  "strontium_carbonate",
  "strontium_chloride",
  "strontium_hydroxide",
  "strontium_nitrate",
  "strontium_oxide",
  "strontium_sulfate",
  "sucrose",
  "tin_oxide",
  "tin_sulfate",
  "triglyceride",
  "urea",
  "zinc_carbonate",
  "zinc_hydroxide",
  "zinc_nitrate",
  "zinc_oxide",
  "zinc_sulfate",
  "zinc_sulfide",
];

ServerEvents.recipes((event) => {
  event.remove(
    // We want to remove the dust recipes so they can be based around 16, not 8.
    { id: /alchemistry:(compactor|combiner|dissolver)\/.+_dust$/ }
  );

  COMPOUNDS_WITH_DUSTS.forEach((compound) => {
    event
      .custom({
        type: "alchemistry:compactor",
        group: "alchemistry:compactor",
        input: {
          count: AMOUNT_PER_DUST,
          ingredient: {
            item: `chemlib:${compound}`,
          },
        },
        result: {
          item: `chemlib:${compound}_dust`,
        },
      })
      .id(`kubejs:compactor/dusts/${compound}`);

    event
      .custom({
        type: "alchemistry:combiner",
        group: "alchemistry:combiner",
        input: [
          {
            count: AMOUNT_PER_DUST,
            ingredient: {
              item: `chemlib:${compound}`,
            },
          },
        ],
        result: {
          item: `chemlib:${compound}_dust`,
        },
      })
      .id(`kubejs:combiner/dusts/${compound}`);

    event
      .custom({
        type: "alchemistry:dissolver",
        group: "alchemistry:dissolver",
        input: {
          count: 1,
          ingredient: {
            tag: `forge:dusts/${compound}`,
          },
        },
        output: {
          groups: [
            {
              probability: 100.0,
              results: [
                {
                  count: AMOUNT_PER_DUST,
                  item: `chemlib:${compound}`,
                },
              ],
            },
          ],
          rolls: 1,
          weighted: false,
        },
      })
      .id(`kubejs:dissolver/dusts/${compound}`);
  });
});
