# Hybrid Exploration

A hybrid system that incorporates the [free-form](./free-form.md) and [menu-based](./menu-based.md) travel methods, for different purposes:

* For quickly moving between major point of interests, the "menu-based" system provides a type of fast-travel. In-game time passes during the journey, but the player does not spend time performing travel actions. This mode is referred to as "*Travel*" movement.
* For discovery (to collect resources, hunt enemies, find new points of interest, etc.) the player chooses to leave pre-defined paths, and explore regions of the world more thoroughly. This mode is referred to as "*Exploration*" movement.
* When the player is within the area defining a point of interest, they move about on a grid using movement keys in the manner common to overhead, tile-based games. A point of interest could be a battlefield for a combat, a dungeon or other adventure site, a town, etc. This mode is referred to as "*Tactical*" movement.

## Travel Movement

TBD

## Exploration Movement

The world is divided into regions (hexes, free-form shapes, etc.). Any given region has characteristics (difficult terrain, hilly, etc.) and zero or more of the following: denizens (goblins, The Great Dragon, etc.), features (a town, cave system, etc.), hazards (flame jets, floods, quicksand, etc.).

When exploring, a player chooses a neighboring region to enter and is subject to it's hazards and characteristics. Additionally, there is a chance to discover it's features and hazards. By default, the player does not know anything about the contents of a region, but can learn information in the following ways:

* exploring the hex by moving into and through it
* observing the hex, from a neighboring region or high spot
* bringing a guide familiar with the hex
* acquire information through conversations, research, maps, etc.

A hex has an "opacity" score that indicates how hard it is to gain knowledge about the hex. Opacity could be based on things like like of sight, "wildness" of the hex, etc. The more a player traverses a hex, the more familiar they become with it.  Each time the player moves through a hex, they gain some affinity. A player gains bonuses based on their affinity relative to a hex's opacity. These bonuses could be:

* increased travel time
* decreased supply usage
* lower chance of encountering hazards or unwanted denizens
* increasing chance of discovering specific features you are searching for
* at some point, a hex can be mastered and the player is confident they know everything about it

Each day, a player get's 3 "exploration turns", which can be used for one of the following:

1. Explore the hex they are currently in
2. Exploit the hex they are currently in
3. Move from the current hex into an adjacent hex

## Tactical Movement

TBD