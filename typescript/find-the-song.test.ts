// The tests for your four functions. You don't need to change this file.
// Each message says what was expected, so a failing test tells you what to look at.
import assert from "node:assert/strict";
import { test } from "node:test";
import { binaryLooks, binarySearch, linearLooks, linearSearch } from "./find-the-song.ts";

const UNSORTED: string[] = ["Midnight Bus", "Lemon Skies", "Slow Rain", "Paper Boats", "Neon Garden", "Quiet Harbor", "Sunday Static", "Golden Hour"];
const LIBRARY: string[] = ["Amber Road", "Blue Hour", "Copper Moon", "Desert Lights", "Echo Park", "Falling Up", "Golden Hour", "Harbor Lights", "Lemon Skies", "Midnight Bus", "Neon Garden", "Paper Boats", "Quiet Harbor", "Slow Rain", "Sunday Static", "Velvet Train"];

function bigLibrary(): string[] {
  const big: string[] = [];
  for (let i = 1; i <= 1000; i++) {
    big.push(`Song ${String(i).padStart(4, "0")}`);
  }
  return big;
}

test("linear search finds each song", () => {
  assert.equal(linearSearch(UNSORTED, "Midnight Bus"), 0, "Not yet: Midnight Bus is the first song, at position 0.");
  assert.equal(linearSearch(UNSORTED, "Slow Rain"), 2, "Not yet: Slow Rain is at position 2.");
  assert.equal(linearSearch(UNSORTED, "Golden Hour"), 7, "Not yet: Golden Hour is the last song, at position 7.");
});

test("linear search gives -1 for a missing song", () => {
  assert.equal(linearSearch(UNSORTED, "Quiet Harbor"), 5, "Not yet: Quiet Harbor is at position 5.");
  assert.equal(linearSearch(UNSORTED, "Blue Hour"), -1, "Not yet: Blue Hour isn't in the list, so the answer is -1.");
  assert.equal(linearSearch(UNSORTED, "slow rain"), -1, 'Not yet: capital letters count, so "slow rain" isn\'t in the list.');
});

test("linear looks count every title read", () => {
  assert.equal(linearLooks(UNSORTED, "Midnight Bus"), 1, "Not yet: the first song takes 1 look.");
  assert.equal(linearLooks(UNSORTED, "Slow Rain"), 3, "Not yet: Slow Rain, at position 2, takes 3 looks.");
  assert.equal(linearLooks(UNSORTED, "Golden Hour"), 8, "Not yet: the last of 8 songs takes 8 looks.");
  assert.equal(linearLooks(UNSORTED, "Blue Hour"), 8, "Not yet: a missing song means reading all 8 titles.");
});

test("binary search finds the first, middle and last songs", () => {
  assert.equal(binarySearch(LIBRARY, "Amber Road"), 0, "Not yet: Amber Road is the first song, at position 0.");
  assert.equal(binarySearch(LIBRARY, "Quiet Harbor"), 12, "Not yet: Quiet Harbor is at position 12.");
  assert.equal(binarySearch(LIBRARY, "Velvet Train"), 15, "Not yet: Velvet Train is the last song, at position 15.");
});

test("binary search gives -1 for missing songs", () => {
  assert.equal(binarySearch(LIBRARY, "Blue Hour"), 1, "Not yet: Blue Hour is at position 1.");
  assert.equal(binarySearch(LIBRARY, "Above the Clouds"), -1, "Not yet: Above the Clouds would come before the first song, and it isn't there.");
  assert.equal(binarySearch(LIBRARY, "Window Seat"), -1, "Not yet: Window Seat would come after the last song, and it isn't there.");
  assert.equal(binarySearch(LIBRARY, "Orange Sky"), -1, "Not yet: Orange Sky would come between Neon Garden and Paper Boats, and it isn't there.");
});

test("binary search handles tiny libraries", () => {
  assert.equal(binarySearch(["Slow Rain"], "Slow Rain"), 0, "Not yet: in a one-song library, the song is at position 0.");
  assert.equal(binarySearch(["Slow Rain"], "Blue Hour"), -1, "Not yet: Blue Hour isn't in a library that only has Slow Rain.");
  assert.equal(binarySearch([], "Slow Rain"), -1, "Not yet: an empty library has no songs, so the answer is -1.");
});

test("binary looks halve what is left", () => {
  assert.equal(binaryLooks(LIBRARY, "Harbor Lights"), 1, "Not yet: Harbor Lights is the first middle, position 7, so it takes 1 look.");
  assert.equal(binaryLooks(LIBRARY, "Quiet Harbor"), 4, "Not yet: Quiet Harbor takes 4 looks, as in the lesson.");
  assert.equal(binaryLooks(LIBRARY, "Orange Sky"), 4, "Not yet: a missing song takes 4 looks in a library of 16.");
});

test("a thousand songs take at most ten binary looks", () => {
  const big = bigLibrary();
  assert.equal(linearLooks(big, "Song 1000"), 1000, "Not yet: a linear search reads all 1,000 titles to reach the last one.");
  assert.equal(binaryLooks(big, "Song 1000"), 10, "Not yet: a binary search reaches the last of 1,000 songs in 10 looks.");
  big.forEach((song, position) => {
    assert.equal(binarySearch(big, song), position, `Not yet: ${song} is at position ${position}.`);
    assert.ok(binaryLooks(big, song) <= 10, "Not yet: no song in 1,000 should take more than 10 binary looks.");
  });
});

test("ten thousand searches in a million songs take under a second", () => {
  const catalog: string[] = [];
  for (let i = 1; i <= 1000000; i++) {
    catalog.push(`Song ${String(i).padStart(7, "0")}`);
  }
  assert.ok(binaryLooks(catalog, "Song 1000000") <= 20, "Not yet: the last of a million songs should take at most 20 binary looks.");
  assert.ok(binaryLooks(catalog, "Song 0000000") <= 20, "Not yet: a song missing from a million songs should take at most 20 binary looks.");
  const started = performance.now();
  for (let k = 1; k <= 10000; k++) {
    const title = `Song ${String(k * 100).padStart(7, "0")}`;
    assert.equal(binarySearch(catalog, title), k * 100 - 1, `Not yet: ${title} is at position ${k * 100 - 1} of the million.`);
    assert.ok(performance.now() - started < 1000, `Not yet: the ticket allows 1 second for 10,000 searches in a million songs, and ${k} searches took longer. A search that halves what's left reads about 20 titles a search.`);
  }
});
