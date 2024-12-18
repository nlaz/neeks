---
layout: ../../layouts/Layout.astro
title: pcm audio
pubDate: 2024-12-18
description: a breakdown of the pcm audio format
---

# Pulse-code modulation

Pulse-code modulation (PCM) is a method used to digitally represent analog signals. It works simply by capturing the amplitude of an audio signal over time. It is a standard form of digital audio in computers and CDs. I'm writing this to demystify the format and to understand how it works.

# Converting analog to digital

PCM works by sampling the amplitude of an analog signal at regular intervals. You can imagine this as a surveyor capturing the height (“amplitude”) at a moment in time. Then again and again and again. Do this enough times and you have a digital representation close to but not perfectly representing the analog version.

This is what they mean when they say the samples are “quantized” into discrete values and coded as binary numbers because a tiny amount of information is lost. The number of bits used to represent each sample determines the accuracy of the digital signal. The more bits you use, the closer to the real signal you get.

# Classic pcm illustration

![pcm-signal](/images/pcm.png)

<hr/>

# Sampling rate

The sampling rate is the number of samples taken per second. Each sample is stored as a chunk in the PCM data. List of common sample rates:

| Rate | Reference |
|---|---|
| 8,000&nbsp;Hz | Adequate for human speech but without sibilance. Used in telephone/walkie-talkie. |
| 11,025&nbsp;Hz | Used for lower-quality PCM, MPEG audio and for audio analysis of subwoofer bandpasses. |
| 16,000&nbsp;Hz | Used in most VoIP and VVoIP, extension of telephone narrowband. |
| 22,050&nbsp;Hz | Used for lower-quality PCM and MPEG audio and for audio analysis of low frequency energy. |
| 44,100&nbsp;Hz | Audio CD, most commonly used rate with MPEG-1 audio (VCD, SVCD, MP3). Covers the 20 kHz bandwidth. |
| 48,000&nbsp;Hz | Standard sampling rate used by professional digital video equipment, could reconstruct frequencies up to 22 kHz. |
| 88,200&nbsp;Hz | Used by some professional recording equipment when the destination is CD, such as mixers, EQs, compressors, reverb, crossovers and recording devices. |
| 96,000&nbsp;Hz | DVD-Audio, LPCM DVD tracks, Blu-ray audio tracks, HD DVD audio tracks. |

<hr/>

# Bit depth

The bit depth is the number of bits used to represent each sample. The more bits used, the more accurately the digital signal can represent the original analog signal. Common bit depths are 8-bit, 16-bit, 24-bit, and 32-bit.

| Depth | Levels | Reference |
|---|---|---|
| 8-bit | 256 | Used in telephony and early computer audio. |
| 16-bit | 65k | Audio CDs, most commonly used for audio processing. |
| 24-bit | 16m | Used in professional audio equipment and high-quality audio. |
| 32-bit | 4b | Used in high-end audio equipment and audio processing. |

<hr/>

# Channels

PCM audio can be mono (1 channel), stereo (two channels), or multi-channel (more than two channels). Each channel is a separate PCM stream that can be mixed together to create a single audio stream. For example, stereo audio has two channels, one for the left speaker and one for the right speaker and it can be interleaved like this:

- **mono (1 channel):** C1 -> C2 -> C3 -> C4…
- **stereo (2 channels):** L1 R1 -> L2 R2 -> L3 R3 -> L4 R4…
- **surround (6 channels):** FL1 FR1 C1 SW1 SL1 SR1 -> FL2 FR2 C2 SW2 SL2 SR2 …

<hr/>

# Example

Here's a example of a 16-bit stereo audio file with a sampling rate of 48 kHz in binary form and decimal:

```
Sample 0: 0000100011011110 (decimal: 2270)
Sample 1: 0000100101100000 (decimal: 2400)
Sample 2: 0000100110111001 (decimal: 2489)
Sample 3: 0000100101100101 (decimal: 2405)
….
Sample 50: 1111111100101110 (decimal: 65326)
Sample 51: 1111111011000110 (decimal: 65222)
Sample 52: 1111111000100111 (decimal: 65063)
Sample 53: 1111110111100010 (decimal: 64994)
```

<hr/>

# Size

The size of a PCM file = (sampling rate) * (bit depth) * (channels) * (time)

As an example, a 16-bit stereo audio file with a sampling rate of 48 kHz and 1 minute of audio:

(48000 samples/sec) * (16 bits/sample) * (2 channels) * (60 sec) = 46.08 MB

<hr/>

# Ear magic

If PCM data is just amplitude information, how do we hear different types of sound? PCM is just a digital conversion of an analog signal and the analog signal is just vibrations in air pressure over time. So how exactly do we understand different types of sounds. Well that gets into the characteristics of the sound itself:

**Pitch (frequency)** is represented by how quickly the amplitude values oscillate up and down. For example:
  - A high-pitched sound like a piccolo might oscillate 2000 times per second
  - A low-pitched sound like a bass drum might oscillate 50 times per second

**Volume (loudness)** is represented by the range of the amplitude values:
  - Quiet sounds have small differences between peaks and troughs
  - Loud sounds have large differences

**Timbre (sound quality)** comes from the complex pattern of the amplitude variations:
  - A pure sine wave (smooth oscillation) sounds like a tuning fork
  - Adding harmonics (multiple frequencies together) creates richer sounds like musical instruments

Our brain processes these amplitude patterns as it travels through different parts of our ear and is remarkably good at extracting meaningful information from just these simple pressure variations.
