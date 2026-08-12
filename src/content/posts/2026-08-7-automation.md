---
title: "How do you automate your measuring test equipment?"
tags:
  - "Automation"
  - "Characterization"
---
In semiconductor research labs there is always a need to electrically characterize whatever device that has been fabricated.
However, there may be several devices that need to be tested and the number of data points may well exceed what can be tackled manually. So, automation of some level is necessary.
These days, most high-end setups already come with built-in automation. But what if you need some custom measurement or you have built a poor man's setup cobbling together different test equipment at the surplus store?

There are a few ways to go about it...

Before buying anything, check if the instrument has some way of controlling it from a computer. UART, RS-485, RS-232, IEEE-488 (GPIB), anything similar will do. All of these are essentially different protocols for communication, and in general there will be some sort of interfacing hardware that translates commands from your computer to the instrument.

--> For RS-232 and RS-485, there are cheap adapters available on the internet and their drivers are also easily available. Simply install them on the acquisition computer and everything's good to go.

--> Same is applicable to IEEE-488 GPIB adapters. Drivers are also easily available. A fun thing about GPIB is that you can daisy chain several instruments on a single bus if you have the connectors.

--> These days USB enabled instruments are also available. They usually appear as virtual COM ports when the drivers are installed.

**Trouble comes along when there are some older instruments which use the above communication protocols but rely on custom chips or firmwares. Again, if their drivers are possible to install on newer computers, Bob's your uncle. Otherwise, better to avoid them (looking at you Princeton Instruments!).**

**Now, to check if your computer can talk to your instrument**

--> Best thing you can do is download NI Max (from National Instruments) and their VISA related software (coming to it a bit later...). These are freely available.

--> If the computer can talk to your instrument correctly, it will appear on the NI Max software.

**How to communicate simultaneously with multiple instruments at once?**

- Writing custom control code is always possible.
- The easier way is to use NI's _VISA_ framework.

VISA stands for Virtual Instrument Software Architecture. Think of it like a jack of all trades communication system for different communication protocols.

![Schematic of VISA framework](/content/blogposts/VISA1.png)
 
**There are two ways that I personally like:** 

- Use a proprietary solution such as LabVIEW (more high level approach) to communicate and acquire data.

- Use pyVISA to communicate with the instruments, and for data acquisition. This is a more intermediate level approach. You still send commands but don't need to talk in the language of each communication protocol.
