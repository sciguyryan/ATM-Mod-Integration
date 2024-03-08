ServerEvents.tags('block', (event) => {});

ServerEvents.tags('entity_type', (event) => {});

ServerEvents.tags('fluid', (event) => {});

ServerEvents.tags('item', (event) => {
  event.add('forge:dusts/pyrite', 'chemlib:iron_disulfide_dust');
  event.add('forge:dusts/cassiterite', 'chemlib:tin_oxide_dust');
  event.add('forge:dusts/calcite', 'chemlib:calcium_carbonate_dust');
  event.add('forge:dusts/galena', 'chemlib:lead_sulfide_dust');
  event.add('forge:dusts/garnierite', 'chemlib:nickel_oxide_dust');
  event.add('forge:dusts/green_sapphire', 'chemlib:aluminum_oxide_dust');
  event.add('forge:dusts/magnesite', 'chemlib:magnesium_carbonate_dust');
  event.add('forge:dusts/pyrolusite', 'chemlib:manganese_oxide_dust');
  event.add('forge:dusts/saltpeter', 'chemlib:potassium_nitrate_dust');
  event.add('forge:dusts/sphalerite', 'chemlib:zinc_sulfide_dust');
  event.add('forge:dusts/stibnite', 'chemlib:antimony_trisulfide_dust');
});
