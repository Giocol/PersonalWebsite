---
title: "Portfolio : Amplifish"
pubDate: 2024-07-28 22:33
author: "Jo Colomban"
tags:
  - Portfolio
  - Unity3D
imgUrl: "/assets/gp1Cover.png"
description: "A Unity3D high-octane first person puncher"
layout: '../../layouts/BlogPost.astro'
---

## Overview

Amplifish is a first person action game developed during the first group project in my Game Programming education at FutureGames Malmö. It was developed over 2.5 weeks with a team of 4 programmers, 6 artists, and 2 designers. I acted as programming lead, helping my teammates get past blockers and designing the game's architecture.

((GIFS HERE))

## Feature highlight: powerup system

One of the game's main mechanics is the ability to consume an enemy and get a powerup based on the type of enemy for a certain amount of time. To implement the feature, I tried to take a very modular approach to guarantee easy expendability, allowing the team to easily implement new powerups if the time allowed it.
A parent "PowerUp" abstract class implements all the methods the player needs to interface with.
```csharp
public abstract class Powerup : MonoBehaviour {
        [SerializeField] protected Color powerupColor;
        [SerializeField] protected float timeToLive = 10f;

        public abstract Powerup Use(GameObject enemyHit);

        public abstract void Deactivate();

        public Color GetPowerupColor() {
            return powerupColor;
        }

        public float GetTimeToLive() {
            return timeToLive;
        }
    }
```
To create a powerup, a programmer can simply extend this class, setting up a few variables and coding its behavior in an override of the `Use` method, like in the `StrenghtPowerup` below

```csharp
public class StrenghtPowerup : Powerup {
        private DamageTrigger damageDealer;
        private AudioSource audioSource;

        private void Awake() {
            audioSource = gameObject.AddComponent<AudioSource>();
            /*** code that sets up audio for the powerup use omitted***/
            powerupColor = new Color(1, 0, 0);
            damageDealer = gameObject.GetComponent<DamageTrigger>();
            if(!damageDealer)
              Debug.LogError("Missing DamageDelear component! Make sure to add it to the player prefab");
        }

        public override Powerup Use(GameObject enemyHit) {
            audioSource.Play();
            damageDealer.ToggleIncreasedDamage(true);
            return null;
        }

        public override void Deactivate() {
            audioSource.Stop();
            damageDealer.ToggleIncreasedDamage(false);
            Destroy(this);
        }
    }
```
With the code structured in this way, the Player just needs to have a reference to the current powerup, and polymorphically call the correct `Use` method on it on player input.