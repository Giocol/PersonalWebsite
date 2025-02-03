---
title: "Portfolio : Journey-inspired 3rd person camera"
pubDate: 2025-01-30 17:00
author: "Jo Colomban"
tags:
  - Portfolio
  - UE5
  - 3C
imgUrl: "/assets/portfolio-camera/cameraCover.gif"
description: "An Unreal Engine 5 third person camera system inspired by Journey"
layout: '../../layouts/BlogPost.astro'
---

## Introduction
<img src='/assets/portfolio-camera/cameraCover.gif' class='rounded-lg p-4' ></img>

This project was inspired by this [GDC talk](https://www.youtube.com/watch?v=C7307qRmlMI) about common 3rd person camera mistakes that made me want to replicate in a handful of days a few of the awesome things that the talk's author, who also happens to be Journey's camera programmer, did with 3C (Camera, Character, Controls) in that game! All the code for it has been written in **C++**, exposing functionality to the editor through custom **DataAssets** and **Blueprint APIs**.

## FOV and Camera Distance
<img src="/assets/portfolio-camera/pitch.gif" class="hidden" />
<div class="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0 p-4">
    <div class="w-full lg:w-2/3">
        <img src="/assets/portfolio-camera/pitch.gif" class="rounded-lg" />
    </div>
    <div class="w-full lg:w-1/3">
        <p class="text-justify">
            The <b>pitch</b>, fully driven by the player's input, also drives <b>camera distance</b> and <b>FOV</b>. A very low pitch that brings the camera close to the ground will bring the camera forwards and open up the FOV in a <b>worm's eye view</b>, allowing the player to take in everything that is happening above them. Conversely, bringing the camera above the character will drive it further away and narrow down the FOV, giving the player a <b>bird's eye view</b>. The camera smoothly transitions between this two states based on the pitch.
        </p>
    </div>
</div>

## Camera reset
<img src="/assets/portfolio-camera/reset.gif" class="hidden" />
<div class="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0 p-4">
    <div class="w-full lg:w-2/3">
        <img src="/assets/portfolio-camera/reset.gif" class="rounded-lg" />
    </div>
    <div class="w-full lg:w-1/3">
        <p class="text-justify">
            When the player <b>does not give any input</b> for a number of seconds tweakable in-engine, the camera will <b>slowly reset to being behind the player at a neutral pitch</b>. Any player input will of course interrupt this process, to always keep the player in control of the camera.
        </p>
    </div>
</div>

## Math utils
This project was a great way to write a small utility library to handle **Polar Coordinates** in a more gracious way than Unreal's *FMath*. To keep calculations simple, I decided to store and modify the camera's coordinates in **polar** rather than cartesian, which meant having to write some custom functions to smoothly **lerp** between angles, since unreal's built-in functions had problems looping from 2π to -2π.
This revealed itself to be very useful, as I've been using this tiny math polar coords library ever since :).

## Credits and Links
As mentioned in the introduction, thanks to John Nesky's [GDC talk](https://www.youtube.com/watch?v=C7307qRmlMI) for the inspiration!

Take a peek at the code on the [GitHub repo](https://github.com/Giocol/ProjectEchidna) :) 


