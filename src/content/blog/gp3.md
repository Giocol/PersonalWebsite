---
title: "Portfolio : Grim"
pubDate: 2024-07-28 12:00
author: "Jo Colomban"
tags:
  - Portfolio
  - Unity3D
imgUrl: "/assets/grimCover.png"
description: "An Unreal Engine 5 Survival Horror"
layout: '../../layouts/BlogPost.astro'
---

## Overview
<iframe width="560" height="315" src="https://www.youtube.com/embed/HagPY-kJjfo?si=NfwLl5ReQ57qaZXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Grim is a first person survival horror game, heavily inspired by **Amnesia The Bunker**, developed during the thrid group project in my Game Programming education at FutureGames Malmö. It was developed over 7 weeks with a team of 4 programmers and 6 artists. I acted as scrum master for the duration of the project, helping my teammates communicate, ensuring that tasks were finished on time and solving blockers for them. 
I wrote about half of the game's system, including but not limited to the ones hilighted below, and I made most of the sound effects :).

All the code for Grim has been written in **C++**, exposing functionality to the editor through custom **DataAssets**.


## Sanity system
<img src="/assets/gp3Sanity.gif" class="hidden" />
I took care of the game's sanity system: sanity is a resource that depleted as the player stayed in the dark or witnessed disturbing events. I tried to make this system as flexible and designer-facing as possible.

<div class="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0">
    <div class="w-full lg:w-2/3">
        <img src="/assets/gp3Sanity.gif" class="rounded-lg" />
    </div>
    <div class="w-full lg:w-1/3">
        <h3>Sanity Event Data Asset</h3>
        <p class="text-justify">
           This is an example of a <b>Sanity Event Data Asset</b>, that a desginer can define a sanity even with. It allows a simple way to select a <b>series of conditions</b> for said event to trigger, including the possibility to make the event re-trigger after a cooldown, and various randomizations to keep it varied, without needing to write <b>any extra code</b>.
        </p>
    </div>
</div>

## Inventory system
<img src="/assets/gp3Inventory.gif" class="hidden" />
All the widgets for the inventory systems were made from scratch in C++, while exposing the inventory size and item descriptions to the editor to allow for easy customization without any further code required.

<div class="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0">
    <div class="w-full lg:w-2/3">
        <img src="/assets/gp3Inventory.gif" class="rounded-lg" />
    </div>
    <div class="w-full lg:w-1/3">
        <h3>Sanity Event Data Asset</h3>
        <p class="text-justify">
          The inventory slots they support stackable items, key items that cannot be lose, and single-use items like displayed here. Each item will display a name and a brief description when hovered. Items that reach their stack cap get split automatically in new inventory slot, ensuring to fully fill the current slot if possible. The data for each item is contained in a <b>data asset</b> as shown below.
        </p>
    </div>
</div>

<img src="/assets/gp3ItemData.png" class="rounded-lg" />


