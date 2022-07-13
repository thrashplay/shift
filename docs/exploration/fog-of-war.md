# Fog of War Exploration

An exploration implementation where a player moves by selecting destinations on a map, and the game simulates the travel between them. Players do not "micro-manage" each 5-foot step, but movement is resolved using larger "exploration turns" which represent several hours of travel.

While travelling, a player may encounter the following:

1. A hazard of the region
2. A resource found in the region, which may optionally be harvested
3. A denizen of the region, which could result in combat or conversation
4. An area of interest, which the player may opt to explore or not (resulting in dropping to tactical movement)
5. A path, which may be followed as described in the "menu-based" or pointcrawl movement
6. Nothing.

Acquiring maps, information from NPCs, views from high points, etc. will allow the fog of war to be lifted for areas that have not been visited. Some things, such as high points, are visible from large distances.

## __Pros__

* Scale of the world is mostly preserved.
* Allows concrete destinations to be plotted by the player, versus abstract exploration of a hex or region.

## __Cons__

* Entire map must be hand-crafted, versus just placing "points of interest" in a region for the [hybrid](./hybrid.md) method.
* Since the player can move between *any* two points, region- or journey-specific narrative elements cannot be crafted as easily.
* Player may plot a course into impassable terrain, such as a cliff, and system would need a way to reroute. Impossible pathfinding? Which direction to divert around? etc.