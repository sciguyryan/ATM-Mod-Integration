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
});
