ServerEvents.tags("block", (event) => {});

ServerEvents.tags("entity_type", (event) => {});

ServerEvents.tags("fluid", (event) => {});

ServerEvents.tags("item", (event) => {
  event.add("forge:dusts/special_quartz", "#forge:dusts/certus_quartz");
  event.add("forge:dusts/special_quartz", "#forge:dusts/nether_quartz")
  event.add("forge:dusts/special_quartz", "#forge:dusts/quartzite");

  event.add("forge:gems/special_quartz", "#forge:gems/certus_quartz");
  event.add("forge:gems/special_quartz", "#forge:gems/nether_quartz")
  event.add("forge:gems/special_quartz", "#forge:gems/quartzite");

  const CHEMLIB_DUST_TAG_PAIRS = [
    ["aluminum_oxide", ["green_sapphire", "sapphire"]],
    ["antimony_trisulfide", ["stibnite"]],
    ["calcium_carbonate", ["calcite"]],
    ["calcium_oxide", ["quicklime"]],
    ["chromium_oxide", ["chromium_trioxide"]],
    ["copper_i_sulfide", ["chalcocite"]],
    ["iron_disulfide", ["pyrite"]],
    ["iron_oxide", ["hematite", "magnetite"]],
    ["lead_sulfide", ["galena"]],
    ["magnesium_carbonate", ["magnesite"]],
    ["manganese_oxide", ["magnesia", "pyrolusite"]],
    ["nickel_oxide", ["garnierite"]],
    ["potassium_nitrate", ["saltpeter"]],
    ["potassium_oxide", ["potash"]],
    ["sodium_carbonate", ["soda_ash"]],
    ["tin_oxide", ["cassiterite"]],
    ["zinc_sulfide", ["sphalerite"]],
  ];

  CHEMLIB_DUST_TAG_PAIRS.forEach((pair) => {
    pair[1].forEach((alternative) => {
      let compound = pair[0];
      let mineral_tag = `forge:dusts/${alternative}`;

      event.add(mineral_tag, `chemlib:${compound}_dust`);
      event.add(`forge:dusts/${compound}`, `#${mineral_tag}`);
    });
  });
});
