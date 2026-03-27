# d&b audiotechnik DS100 / DS100M

This module controls d&b audiotechnik DS100 and DS100M DSP devices using the OSC protocol over UDP.

## Supported Devices

-   **DS100** – En-Scene and En-Space DSP/matrix device with Dante audio networking. Supports up to 128 inputs and 64 outputs depending on scalable I/O option.
-   **DS100M** – En-Scene and En-Space DSP/matrix device with Milan™/AES67 and MADI audio networking. Supports the same matrix sizes as the DS100 and additionally 96 kHz at Extra-large capacity.

The module automatically queries the active matrix size from the device at startup and adapts accordingly. This requires firmware V3.00.01 or later. You can also configure the expected matrix size manually to prepare actions and variables before the device is online.

## Scalable I/O options

The DS100 Signal Engine comprises an audio matrix with scalable I/O options:

| Size | Inputs | Outputs | DS100 sample rates | DS100M sample rates |
|---|---|---|---|---|
| **S** – Small | 64 | 24 | 48 kHz, 96 kHz | 48 kHz, 96 kHz |
| **L** – Large | 64 | 64 | 48 kHz, 96 kHz | 48 kHz, 96 kHz |
| **XL** – Extra-large | 128 | 64 | 48 kHz | 48 kHz, 96 kHz |

## Configuration

-   Enter the IP address of the device.
-   The default OSC sending port (Companion → device) is **50010**.
-   The default OSC receiving port (device → Companion) is **50011**.
-   These ports should not be changed unless required by your network setup.
-   The device communicates over **UDP**.
-   Set **Matrix size** to match the scalable I/O option of your device. This configures the number of inputs and outputs available in actions, feedbacks and variables. The module will update this automatically when the device reports its actual size, but setting it correctly here ensures the correct buttons and variables are available before the device is online.
-   Enable **Polling** if you want the module to periodically refresh state (useful for environments where other controllers may change values).

## Actions

The module provides actions for:

-   Matrix Input: Mute, Gain, Delay, Delay Enable, EQ Enable, Polarity, Channel Name
-   Matrix Node: Enable, Gain, Delay, Delay Enable
-   Matrix Output: Mute, Gain, Delay, Delay Enable, EQ Enable, Polarity, Channel Name
-   En-Scene Positioning: Source Spread, Delay Mode, Source Position (X/Y/Z)
-   En-Space: Room selection, Predelay Factor, Rear Level, Reverb Send Gain
-   Scenes: Recall (previous, next, by number), query current scene
-   Sound Object Routing: Mute, Gain (per Function Group)
-   Function Groups: Spread Factor, Delay (supports up to 32 Function Groups)

## Feedbacks

Feedbacks reflect the current state of mute, delay, EQ, and polarity for Matrix Inputs, Outputs, and Nodes.

## Variables

Variables are available for all matrix input, output, and node parameters, as well as scene index, name, and comment.

## Presets

-
