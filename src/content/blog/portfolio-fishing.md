---
title: "Portfolio : 1st person fishing system"
pubDate: 2025-01-30 17:00
author: "Jo Colomban"
tags:
  - Portfolio
  - UE5
  - 3C
imgUrl: "/assets/portfolio-fishing/fishingCover.gif"
description: "An Unreal Engine 5 first person fishing system"
layout: '../../layouts/BlogPost.astro'
---

## Introduction
<img src='/assets/portfolio-fishing/fishingCover.gif' class='hidden' ></img>


<p class='text-xl'>
This project aimed to create a in-depth, arcade-y, designer-tweakable first person fishing system for a fishing horror game. All the code for it has been written in **C++**, including the custom UI Widgets, exposing functionality to the editor through custom **DataAssets** and **Blueprint APIs**.
</p>
<img src='/assets/portfolio-fishing/fishingCover.gif' class='rounded-lg p-4' ></img>

## Aiming
<img src='/assets/portfolio-fishing/aiming.gif' class='rounded-lg p-4' ></img>
The player is required to pick up a spear from the ground and approach the fishing area. That initiates the first part of the fishing process: aiming.
<div class="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0 p-4">
    <div class="w-full lg:w-2/3">
        <img src="/assets/portfolio-fishing/design.png" class="rounded-lg" />
    </div>
    <div class="w-full lg:w-1/3">
        <h3>Aiming minigame</h3>
        <p class="text-justify">
            While aiming, the player has to bring the two aiming sliders in the green area of both their vertical and horizontal bars. Those bars move as the fish tries to get away, so the player has to actively "fight back". Once both sliders are in the green area, the player can throw the spear and initiate the second part of the fishing process.
        </p>
    </div>
</div>

<div class="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0 p-4">
    <div class="w-full lg:w-2/3">
        <img src="/assets/portfolio-fishing/data.png" class="rounded-lg" />
    </div>
    <div class="w-full lg:w-1/3">
        <h3>Aiming UI</h3>
        <p class="text-justify">
            The UI for the two bars is made of <b>custom C++ Widgets</b>, and the values for the green and orange areas are fully driven by the <b>data assets</b> (as shown to the left) that define a fishing event, ensuring that changing the bars' behavior and look is as easy as creating a new data asset in-editor, without needing to touch the code.
        </p>
    </div>
</div>

## Reeling
<img src='/assets/portfolio-fishing/reeling.gif' class='rounded-lg p-4' ></img>
Once the player throws the spear, the second part of the fishing sequence starts: reeling the fish in. To do so, the player has to keep RMB pressed while solving a series of quick-time events.

<div class="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0 p-4">
    <div class="w-full lg:w-2/3">
        <img src="/assets/portfolio-fishing/qtes.gif" class="rounded-lg" />
    </div>
    <div class="w-full lg:w-1/3">
        <h3>Quick-time events</h3>
        <p class="text-justify">
            Quick-time events (QTEs) can be defined in-editor through <b>data assets</b>! This allows a designer to quickly add any amount of QTEs to a certain fishing event, defining for each of those QTEs all the parameters shown in the GIF to the left, giving ample options of randomization and repetition without needing to write any extra code.
        </p>
    </div>
</div>

## Credits and Links

Take a peek at the code on the [GitHub repo](https://github.com/Giocol/ProjectSwordfish) :) 


