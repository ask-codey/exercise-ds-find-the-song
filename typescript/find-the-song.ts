// Your four functions. The comment above each one says what it should
// return, with examples. Replace each return line with your own code,
// and write the growth rate of each search in its comment.

/*
 * Look at each song in turn, from the first, and give back the
 * position of the first one whose title matches. Give back -1 when
 * the title isn't in the list. The list can be in any order.
 * Capital letters count: "Slow Rain" and "slow rain" are different.
 *
 * linearSearch(["Midnight Bus", "Lemon Skies", "Slow Rain"], "Slow Rain") -> 2
 * linearSearch(["Midnight Bus", "Lemon Skies", "Slow Rain"], "Blue Hour") -> -1
 *
 * Growth rate: (write it here)
 */
export function linearSearch(songs: string[], title: string): number {
  return -1;
}

/*
 * How many titles does a linear search read to answer? Count one
 * look for every title it reads: up to and including the match, or
 * every title when the song isn't there.
 *
 * linearLooks(["Midnight Bus", "Lemon Skies", "Slow Rain"], "Midnight Bus") -> 1
 * linearLooks(["Midnight Bus", "Lemon Skies", "Slow Rain"], "Slow Rain") -> 3
 * linearLooks(["Midnight Bus", "Lemon Skies", "Slow Rain"], "Blue Hour") -> 3
 */
export function linearLooks(songs: string[], title: string): number {
  return 0;
}

/*
 * The songs are sorted A to Z. Find the title by binary search:
 * keep low and high, the first and last positions it could be at,
 * look at the middle one, (low + high) / 2 rounded down, and throw
 * away the half it can't be in. Give back its position, or -1 when
 * it isn't there. Compare titles letter by letter, capitals first,
 * the way the lesson does.
 *
 * binarySearch(["Blue Hour", "Lemon Skies", "Slow Rain"], "Slow Rain") -> 2
 * binarySearch(["Blue Hour", "Lemon Skies", "Slow Rain"], "Paper Boats") -> -1
 *
 * Growth rate: (write it here)
 */
export function binarySearch(sortedSongs: string[], title: string): number {
  return -1;
}

/*
 * How many titles does your binary search look at to answer? Count
 * one look for every middle title it reads.
 *
 * binaryLooks(["Blue Hour", "Lemon Skies", "Slow Rain"], "Lemon Skies") -> 1
 * binaryLooks(["Blue Hour", "Lemon Skies", "Slow Rain"], "Slow Rain") -> 2
 * binaryLooks(["Blue Hour", "Lemon Skies", "Slow Rain"], "Paper Boats") -> 2
 */
export function binaryLooks(sortedSongs: string[], title: string): number {
  return 0;
}
