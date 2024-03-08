// NOTE - around 9 seconds per input dust used as a basis.
const INPUT_MULTIPLIER = 9;

const EU_PER_TICK_LV = 30;

ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .electrolyzer('dusts/ilmenite')
    .itemInputs('5x #forge:dusts/ilmenite')
    .itemOutputs('1x gtceu:iron_dust', '1x gtceu:titanium_dust')
    .outputFluids(Fluid.of('gtceu:liquid_oxygen', 3000))
    .duration(INPUT_MULTIPLIER * 5)
    .EUt(EU_PER_TICK_LV);
});

ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .electrolyzer('dusts/rutile')
    .itemInputs('3x #forge:dusts/rutile')
    .itemOutputs('1x gtceu:titanium_dust')
    .outputFluids(Fluid.of('gtceu:liquid_oxygen', 2000))
    .duration(INPUT_MULTIPLIER * 3)
    .EUt(EU_PER_TICK_LV);
});

ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .electrolyzer('dusts/scheelite')
    .itemInputs('5x #forge:dusts/scheelite')
    .itemOutputs('1x gtceu:calcium_dust', '1x gtceu:tungsten_dust')
    .outputFluids(Fluid.of('gtceu:liquid_oxygen', 4000))
    .duration(INPUT_MULTIPLIER * 5)
    .EUt(EU_PER_TICK_LV);
});
