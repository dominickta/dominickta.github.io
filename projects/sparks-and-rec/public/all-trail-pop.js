const trail_pop_spec = {
  "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
  "hconcat": [
    {
      "vconcat": [
        {
          "data": {"name": "data-89dec9d43fa2bff6cdc35ade4880e4c5"},
          "mark": {"type": "bar", "opacity": 0.6},
          "encoding": {
            "color": {
              "field": "burned",
              "scale": {"range": ["#2ca02c", "#ff7f0e"]},
              "type": "nominal"
            },
            "tooltip": [
              {
                "field": "tot_vis",
                "title": "Total visitors",
                "type": "quantitative"
              }
            ],
            "x": {
              "field": "tot_vis",
              "scale": {"domain": [0, 80000]},
              "title": "Total visitors",
              "type": "quantitative"
            },
            "y": {"field": "Name", "sort": "-x", "title": "", "type": "nominal"}
          },
          "height": 200,
          "title": "3 years pre-fire (Sep 2014 - Aug 2015)",
          "width": 150
        },
        {
          "data": {"name": "data-d7c78f4c88528d4cf3cb0be4791ef061"},
          "mark": {"type": "bar", "opacity": 0.6},
          "encoding": {
            "color": {
              "field": "burned",
              "scale": {"range": ["#2ca02c", "#ff7f0e"]},
              "type": "nominal"
            },
            "tooltip": [
              {
                "field": "tot_vis",
                "title": "Total visitors",
                "type": "quantitative"
              }
            ],
            "x": {
              "field": "tot_vis",
              "scale": {"domain": [0, 80000]},
              "title": "Total visitors",
              "type": "quantitative"
            },
            "y": {"field": "Name", "sort": "-x", "title": "", "type": "nominal"}
          },
          "height": 200,
          "title": "1 year post-fire (Sep 2017 - Aug 2018)",
          "width": 150
        }
      ]
    },
    {
      "vconcat": [
        {
          "data": {"name": "data-b4c3c8f3fcb725eef6c70832608a1dec"},
          "mark": {"type": "bar", "opacity": 0.6},
          "encoding": {
            "color": {
              "field": "burned",
              "scale": {"range": ["#2ca02c", "#ff7f0e"]},
              "type": "nominal"
            },
            "tooltip": [
              {
                "field": "tot_vis",
                "title": "Total visitors",
                "type": "quantitative"
              }
            ],
            "x": {
              "field": "tot_vis",
              "scale": {"domain": [0, 80000]},
              "title": "Total visitors",
              "type": "quantitative"
            },
            "y": {"field": "Name", "sort": "-x", "title": "", "type": "nominal"}
          },
          "height": 200,
          "title": "2 years pre-fire (Sep 2015 - Aug 2016)",
          "width": 150
        },
        {
          "data": {"name": "data-456f3c99342b21bea9c9e786eca8ce5c"},
          "mark": {"type": "bar", "opacity": 0.6},
          "encoding": {
            "color": {
              "field": "burned",
              "scale": {"range": ["#2ca02c", "#ff7f0e"]},
              "type": "nominal"
            },
            "tooltip": [
              {
                "field": "tot_vis",
                "title": "Total visitors",
                "type": "quantitative"
              }
            ],
            "x": {
              "field": "tot_vis",
              "scale": {"domain": [0, 80000]},
              "title": "Total visitors",
              "type": "quantitative"
            },
            "y": {"field": "Name", "sort": "-x", "title": "", "type": "nominal"}
          },
          "height": 200,
          "title": "2 years post-fire (Sep 2018 - Aug 2019)",
          "width": 150
        }
      ]
    },
    {
      "data": {"name": "data-d2fd4c31e283ba44154b078c46a66ee9"},
      "mark": {"type": "bar", "opacity": 0.6},
      "encoding": {
        "color": {
          "field": "burned",
          "scale": {"range": ["#2ca02c", "#ff7f0e"]},
          "type": "nominal"
        },
        "tooltip": [
          {
            "field": "tot_vis",
            "title": "Total visitors",
            "type": "quantitative"
          }
        ],
        "x": {
          "field": "tot_vis",
          "scale": {"domain": [0, 80000]},
          "title": "Total visitors",
          "type": "quantitative"
        },
        "y": {"field": "Name", "sort": "-x", "title": "", "type": "nominal"}
      },
      "height": 200,
      "title": "1 year pre-fire (Sep 2016 - Aug 2017)",
      "width": 150
    }
  ],
  "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
  "datasets": {
    "data-89dec9d43fa2bff6cdc35ade4880e4c5": [
      {"Name": "Eagle Creek", "burned": "yes", "tot_vis": 27943},
      {"Name": "Oneonta Gorge", "burned": "yes", "tot_vis": 27635},
      {"Name": "Munra Falls", "burned": "yes", "tot_vis": 19455},
      {"Name": "Horsetail Falls", "burned": "no", "tot_vis": 19313},
      {"Name": "Angels rest trail", "burned": "no", "tot_vis": 19027},
      {"Name": "Latourell Falls", "burned": "no", "tot_vis": 18590},
      {"Name": "Wahkeena Falls", "burned": "no", "tot_vis": 14500},
      {"Name": "Beacon Rock", "burned": "no", "tot_vis": 11358},
      {
        "Name": "Nesmith Point, McCord, Elowa Falls",
        "burned": "yes",
        "tot_vis": 8355
      },
      {"Name": "Washougal River area", "burned": "no", "tot_vis": 8185}
    ],
    "data-d7c78f4c88528d4cf3cb0be4791ef061": [
      {"Name": "Latourell Falls", "burned": "no", "tot_vis": 62887},
      {"Name": "Beacon Rock", "burned": "no", "tot_vis": 56197},
      {"Name": "Dog Mountain/Augspurger Mtn", "burned": "no", "tot_vis": 50060},
      {"Name": "Umbrella/Sahalie Falls", "burned": "no", "tot_vis": 33327},
      {"Name": "Falls Creek Falls", "burned": "no", "tot_vis": 27185},
      {"Name": "Tamanawas Falls trail", "burned": "no", "tot_vis": 26259},
      {"Name": "Tom McCall TNC trail", "burned": "no", "tot_vis": 26097},
      {"Name": "Cape Horn", "burned": "no", "tot_vis": 20681},
      {
        "Name": "Surveyors ridge/cooks meadow",
        "burned": "no",
        "tot_vis": 16848
      },
      {"Name": "Washougal River area", "burned": "no", "tot_vis": 12193}
    ],
    "data-b4c3c8f3fcb725eef6c70832608a1dec": [
      {"Name": "Oneonta Gorge", "burned": "yes", "tot_vis": 61939},
      {"Name": "Eagle Creek", "burned": "yes", "tot_vis": 52615},
      {"Name": "Munra Falls", "burned": "yes", "tot_vis": 52592},
      {"Name": "Latourell Falls", "burned": "no", "tot_vis": 42027},
      {"Name": "Horsetail Falls", "burned": "no", "tot_vis": 39462},
      {"Name": "Angels rest trail", "burned": "no", "tot_vis": 31366},
      {"Name": "Wahkeena Falls", "burned": "no", "tot_vis": 30523},
      {"Name": "Beacon Rock", "burned": "no", "tot_vis": 22464},
      {
        "Name": "Nesmith Point, McCord, Elowa Falls",
        "burned": "yes",
        "tot_vis": 21117
      },
      {"Name": "Umbrella/Sahalie Falls", "burned": "no", "tot_vis": 18086}
    ],
    "data-456f3c99342b21bea9c9e786eca8ce5c": [
      {"Name": "Angels rest trail", "burned": "no", "tot_vis": 70270},
      {"Name": "Latourell Falls", "burned": "no", "tot_vis": 66026},
      {"Name": "Beacon Rock", "burned": "no", "tot_vis": 61610},
      {"Name": "Dog Mountain/Augspurger Mtn", "burned": "no", "tot_vis": 45977},
      {"Name": "Wahkeena Falls", "burned": "no", "tot_vis": 34590},
      {"Name": "Tamanawas Falls trail", "burned": "no", "tot_vis": 32614},
      {"Name": "Tom McCall TNC trail", "burned": "no", "tot_vis": 30829},
      {"Name": "Umbrella/Sahalie Falls", "burned": "no", "tot_vis": 28127},
      {"Name": "Horsetail Falls", "burned": "no", "tot_vis": 23469},
      {"Name": "Falls Creek Falls", "burned": "no", "tot_vis": 22681}
    ],
    "data-d2fd4c31e283ba44154b078c46a66ee9": [
      {"Name": "Oneonta Gorge", "burned": "yes", "tot_vis": 87331},
      {"Name": "Munra Falls", "burned": "yes", "tot_vis": 62278},
      {"Name": "Latourell Falls", "burned": "no", "tot_vis": 51498},
      {"Name": "Angels rest trail", "burned": "no", "tot_vis": 47006},
      {"Name": "Eagle Creek", "burned": "yes", "tot_vis": 45701},
      {"Name": "Horsetail Falls", "burned": "no", "tot_vis": 43475},
      {"Name": "Dog Mountain/Augspurger Mtn", "burned": "no", "tot_vis": 38192},
      {"Name": "Wahkeena Falls", "burned": "no", "tot_vis": 36710},
      {"Name": "Beacon Rock", "burned": "no", "tot_vis": 30620},
      {"Name": "Umbrella/Sahalie Falls", "burned": "no", "tot_vis": 24784}
    ]
  }
};