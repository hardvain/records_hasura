import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default ({  /* see data tab */ }) => (
  <ResponsiveLine
    data={[
      {
        "id": "japan",
        "color": "hsl(222, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 278
          },
          {
            "x": "helicopter",
            "y": 50
          },
          {
            "x": "boat",
            "y": 10
          },
          {
            "x": "train",
            "y": 165
          },
          {
            "x": "subway",
            "y": 151
          },
          {
            "x": "bus",
            "y": 216
          },
          {
            "x": "car",
            "y": 223
          },
          {
            "x": "moto",
            "y": 186
          },
          {
            "x": "bicycle",
            "y": 155
          },
          {
            "x": "horse",
            "y": 170
          },
          {
            "x": "skateboard",
            "y": 59
          },
          {
            "x": "others",
            "y": 74
          }
        ]
      },
      {
        "id": "france",
        "color": "hsl(75, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 160
          },
          {
            "x": "helicopter",
            "y": 153
          },
          {
            "x": "boat",
            "y": 157
          },
          {
            "x": "train",
            "y": 188
          },
          {
            "x": "subway",
            "y": 208
          },
          {
            "x": "bus",
            "y": 200
          },
          {
            "x": "car",
            "y": 43
          },
          {
            "x": "moto",
            "y": 23
          },
          {
            "x": "bicycle",
            "y": 51
          },
          {
            "x": "horse",
            "y": 298
          },
          {
            "x": "skateboard",
            "y": 273
          },
          {
            "x": "others",
            "y": 100
          }
        ]
      },
      {
        "id": "us",
        "color": "hsl(9, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 58
          },
          {
            "x": "helicopter",
            "y": 200
          },
          {
            "x": "boat",
            "y": 187
          },
          {
            "x": "train",
            "y": 259
          },
          {
            "x": "subway",
            "y": 35
          },
          {
            "x": "bus",
            "y": 245
          },
          {
            "x": "car",
            "y": 98
          },
          {
            "x": "moto",
            "y": 49
          },
          {
            "x": "bicycle",
            "y": 40
          },
          {
            "x": "horse",
            "y": 90
          },
          {
            "x": "skateboard",
            "y": 12
          },
          {
            "x": "others",
            "y": 133
          }
        ]
      },
      {
        "id": "germany",
        "color": "hsl(323, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 117
          },
          {
            "x": "helicopter",
            "y": 98
          },
          {
            "x": "boat",
            "y": 4
          },
          {
            "x": "train",
            "y": 99
          },
          {
            "x": "subway",
            "y": 131
          },
          {
            "x": "bus",
            "y": 150
          },
          {
            "x": "car",
            "y": 202
          },
          {
            "x": "moto",
            "y": 115
          },
          {
            "x": "bicycle",
            "y": 30
          },
          {
            "x": "horse",
            "y": 89
          },
          {
            "x": "skateboard",
            "y": 235
          },
          {
            "x": "others",
            "y": 237
          }
        ]
      },
      {
        "id": "norway",
        "color": "hsl(344, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 8
          },
          {
            "x": "helicopter",
            "y": 54
          },
          {
            "x": "boat",
            "y": 30
          },
          {
            "x": "train",
            "y": 38
          },
          {
            "x": "subway",
            "y": 125
          },
          {
            "x": "bus",
            "y": 246
          },
          {
            "x": "car",
            "y": 0
          },
          {
            "x": "moto",
            "y": 298
          },
          {
            "x": "bicycle",
            "y": 281
          },
          {
            "x": "horse",
            "y": 139
          },
          {
            "x": "skateboard",
            "y": 178
          },
          {
            "x": "others",
            "y": 277
          }
        ]
      }
    ]}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle'
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle'
    }}
    colors={{ scheme: 'nivo' }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'white',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)