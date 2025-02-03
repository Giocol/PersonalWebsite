---
title: "Portfolio : Menagerie"
pubDate: 2024-07-28 11:00
author: "Jo Colomban"
tags:
  - Portfolio
  - UE5
  - AI
imgUrl: "/assets/grimCover.png"
description: "An Unreal Engine 5 Stealth game"
layout: '../../layouts/BlogPost.astro'
---

## Overview



Menagerie is a **1st person stealth game**, developed during the fourth group project in my Game Programming education at FutureGames Malmö. It was developed over 4 weeks with a team of 4 programmers and 6 artists. I acted as product owner for the duration of the project, driving the design of the game, helping my teammates communicate, ensuring that tasks were finished on time and solving blockers for them. 
I worked on various game systems and gameplay features, as well as helping out my teammates with character and camera.

All the code for Menagerie has been written in **C++**, exposing functionality to the editor through custom **DataAssets** and **Blueprint API**s.


## AI
<img src="/assets/gp4AI.gif" class="hidden" />

The AI was our main focus during development, as we tried to mix a traditional Behavior Tree with a **fuzzy logic-driven brain**. From this, I developed one of my specialization project, that you can find [here](http://www.jocolomban.com/blog/portfolio-ai/).

<div class="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0">
    <div class="w-full lg:w-2/3">
        <img src="/assets/gp4AI.gif" class="rounded-lg" />
    </div>
    <div class="w-full lg:w-1/3">
        <p class="text-justify">
           This resulted in an AI that can sense different signals, both visual and auditory, and act on them depending on their importance, with their priority getting re-adjusted every tick, acting differently on signals of different intensity.
        </p>
    </div>
</div>

## Links
You can check out the game on [itch.io](https://futuregames.itch.io/menagerie) :) 


