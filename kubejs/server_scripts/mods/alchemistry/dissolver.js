ServerEvents.recipes((event) => {
  event.custom({
    type: "alchemistry:dissolver",
    group: "alchemistry:dissolver",
    input: {
      count: 1,
      ingredient: {
        tag: "forge:gems/charcoal",
      },
    },
    output: {
      groups: [
        {
          probability: 100.0,
          results: [
            {
              count: 16,
              item: "chemlib:graphite",
            },
          ],
        },
      ],
      rolls: 1,
      weighted: false,
    },
  });

  event.custom({
    type: "alchemistry:dissolver",
    group: "alchemistry:dissolver",
    input: {
      count: 1,
      ingredient: {
        tag: "forge:gems/coal",
      },
    },
    output: {
      groups: [
        {
          probability: 100.0,
          results: [
            {
              count: 16,
              item: "chemlib:graphite",
            },
          ],
        },
      ],
      rolls: 1,
      weighted: false,
    },
  });

  event.custom({
    type: "alchemistry:dissolver",
    group: "alchemistry:dissolver",
    input: {
      count: 1,
      ingredient: {
        tag: "forge:gems/diamond",
      },
    },
    output: {
      groups: [
        {
          probability: 100.0,
          results: [
            {
              count: 64,
              item: "chemlib:graphite",
            },
            {
              count: 64,
              item: "chemlib:graphite",
            },
            {
              count: 64,
              item: "chemlib:graphite",
            },
            {
              count: 64,
              item: "chemlib:graphite",
            },
          ],
        },
      ],
      rolls: 1,
      weighted: false,
    },
  });

  // NOTE - the chance for bonus barium isn't given to the gem, just to the dust.
  event.custom({
    type: "alchemistry:dissolver",
    group: "alchemistry:dissolver",
    input: {
      count: 3,
      ingredient: {
        tag: "forge:gems/nether_quartz",
      },
    },
    output: {
      groups: [
        {
          probability: 100.0,
          results: [
            {
              count: 16,
              item: "chemlib:silicon",
            },
            {
              count: 32,
              item: "chemlib:oxygen",
            },
          ],
        },
      ],
      rolls: 1,
      weighted: false,
    },
  });
});
