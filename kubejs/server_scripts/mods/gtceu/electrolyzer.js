ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .electrolyzer('dusts/ilmenite')
    .itemInputs('5x #forge:dusts/ilmenite')
    .itemOutputs('1x gtceu:iron_dust', '1x gtceu:titanium_dust')
    .outputFluids(Fluid.of('gtceu:liquid_oxygen', 3000))
    .duration(100)
    .EUt(60);
});

ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .electrolyzer('dusts/rutile')
    .itemInputs('3x #forge:dusts/rutile')
    .itemOutputs('1x gtceu:titanium_dust')
    .outputFluids(Fluid.of('gtceu:liquid_oxygen', 2000))
    .duration(100)
    .EUt(60);
});
