ServerEvents.tags("block", (event) => {});

ServerEvents.tags("entity_type", (event) => {});

ServerEvents.tags("fluid", (event) => {});

ServerEvents.tags("item", (event) => {
  event.add("forge:dusts/pyrite", "chemlib:iron_disulfide_dust");
  event.add("forge:dusts/cassiterite", "chemlib:tin_oxide_dust");
});
