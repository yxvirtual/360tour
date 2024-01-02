var APP_DATA = {
  "scenes": [
    {
      "id": "0-first-floor",
      "name": "first floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3600,
      "initialViewParameters": {
        "yaw": -0.009261542010142065,
        "pitch": 0.5040233637584066,
        "fov": 1.1599130492069087
      },
      "linkHotspots": [
        {
          "yaw": 0.22810783160070436,
          "pitch": 0.46460515368675104,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3600,
      "initialViewParameters": {
        "yaw": 0.11654295327833708,
        "pitch": 0.16570186417241572,
        "fov": 1.1599130492069087
      },
      "linkHotspots": [
        {
          "yaw": -2.889018605664141,
          "pitch": 0.09032591816384894,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.6308035398281966,
          "pitch": 0.21654627247714409,
          "rotation": 0,
          "target": "4-stairs"
        },
        {
          "yaw": -2.5705850723283508,
          "pitch": 0.38556091377753887,
          "rotation": 0,
          "target": "0-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3600,
      "initialViewParameters": {
        "yaw": 1.6724606118483596,
        "pitch": 0.17611082884823404,
        "fov": 1.1599130492069087
      },
      "linkHotspots": [
        {
          "yaw": 2.9976953055654887,
          "pitch": 0.27155837831956475,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-master-bed",
      "name": "master bed",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3600,
      "initialViewParameters": {
        "yaw": -0.6709879248364157,
        "pitch": 0.010552106502519365,
        "fov": 1.1599130492069087
      },
      "linkHotspots": [
        {
          "yaw": 3.0017588627893295,
          "pitch": 0.3303756495213932,
          "rotation": 0,
          "target": "4-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-stairs",
      "name": "stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3600,
      "initialViewParameters": {
        "yaw": -0.879120958204755,
        "pitch": 1.4566925074261503,
        "fov": 1.1599130492069087
      },
      "linkHotspots": [
        {
          "yaw": 0.44883160917232523,
          "pitch": 0.259739657479205,
          "rotation": 0,
          "target": "3-master-bed"
        },
        {
          "yaw": -1.1708262285378268,
          "pitch": 1.169224644719467,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
