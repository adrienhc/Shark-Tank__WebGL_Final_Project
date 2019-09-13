# Shark Tank 

A single-player game, featuring a tank of moving, splashable water. The goal of the game is to protect the floating rubber duck from attacking sharks for as long as possible by clicking on points on the water surface to fire cannonballs.

## Link:

You can **play the game** at the following web link: https://ucla-fa18-cs174a.github.io/term-project-group-22/

The game was developed for and **works best on Google Chrome**.

## Member Contributions:

**Lawrence Lee**: Created models for water (not including waves), duck, shark, tank, and cannon. Texture mapping for environment. In charge of the primary game loop, which includes starting the timer, keeping track of the 
duck and sharks, moving objects in the pool around (ie. sharks chasing the duck), cannon rotation, all collision detection, and resetting the game. Also implemented 2d canvas for all text.

**Adrien Hadj-Chaib**: Did the Picking, by gathering canvas 
coordinates on click, unprojecting them to get a Ray Casted Picking vector and then compute the intersection of the Ray Casted Picking vector onto the water plane. 
Created the water data structures, (Vertices Array and Height Map), Separated Height Map into two: one for the default wave and another one for player caused waves. Made the water flat shaded and optimized the way 
it gets sent to the GPU at every frame (updated position and normals). Made the caustics animated using a gif-like approach.  

**Joseph Zicaro**: Timing, everything about the cannon balls (except for collision detection)and all water movements, including pseudo-collisions with the balls. Wave structures.


## How to Play (if using local clone):

Run host.command, and then open a browser at localhost:8000. Single player controls involve using the mouse to click points on the water surface to shoot cannonballs at.


## Disclaimer:

Animated caustics take some time to load, currently we use a static caustic for 20 seconds. Possible that the animated caustic will not be ready after this time because it requires a lot of images, but it will eventually appear and stay until window is refreshed.
