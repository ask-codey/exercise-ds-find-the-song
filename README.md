# Exercise: Find the Song

Exercise code for the lesson **Exercise: Find the Song** in the course *Data Structures and Big-O, Demystified* on [ask-codey.com](https://www.ask-codey.com).

## The ticket

> **From:** the search team, a music app
>
> Our catalog has grown to a million songs, and the search box looks a title up on every keystroke. Today's search reads the titles from the top, so a song that isn't there costs a million reads per keystroke, and the box freezes while people type.
>
> 1. **The catalog arrives sorted A to Z** every night. You can count on that order.
> 2. **A catalog search reads at most 20 titles** in a million songs, found or not, and 10,000 searches finish in under a second.
> 3. **Playlists aren't sorted.** They keep the search that reads from the top, so it has to work on any order.
> 4. **We want to see the difference:** for each search, count how many titles it reads.

Four functions are yours to finish:

- `linearSearch` (`LinearSearch` in C#, `linear_search` in Python): a song's position in a playlist, in any order, read from the top, or -1 when it isn't there
- `linearLooks` (`LinearLooks`, `linear_looks`): how many titles that search reads
- `binarySearch` (`BinarySearch`, `binary_search`): a song's position in the catalog, sorted A to Z, or -1
- `binaryLooks` (`BinaryLooks`, `binary_looks`): how many titles the catalog search reads

Nine tests check them, ending with the ticket's catalog: 10,000 searches in a million songs, in under a second.

## Pick your language

The same exercise is here in five languages. Work in the folder for the language you set up; you only need one.

| Folder | Your code | The tests |
|---|---|---|
| `csharp/` | `FindTheSong/Search.cs` | `FindTheSong.Tests/SearchTests.cs` |
| `java/` | `src/main/java/Search.java` | `src/test/java/SearchTest.java` |
| `python/` | `find_the_song.py` | `test_find_the_song.py` |
| `javascript/` | `find-the-song.js` | `find-the-song.test.js` |
| `typescript/` | `find-the-song.ts` | `find-the-song.test.ts` |

Each function returns `-1` or `0` for now. The comment above it says what it should return, with examples. Replace the `return` line with your own code, and write each search's growth rate on its **Growth rate:** line.

Every folder also has a small demo program that tries your functions on the lesson's 16-song library and on a library of 1,000 songs. You don't need to change the tests or the demo.

## Run it and check your work

Open your language's folder in VS Code (**File > Open Folder**), then open its terminal (**Terminal > New Terminal**) and run these commands there.

**C#**

```bash
dotnet run --project FindTheSong
dotnet test
```

**Java** (the Maven Wrapper downloads Maven the first time, so the first run takes a minute)

```bash
java src/main/java/Demo.java
./mvnw test
```

On Windows in PowerShell, write `.\mvnw test` instead of `./mvnw test`.

**Python** (once: make a virtual environment and install pytest into it)

```bash
python -m venv .venv
```

Then turn it on: `.venv\Scripts\Activate.ps1` in PowerShell on Windows, or `source .venv/bin/activate` on macOS (where the command is `python3`, not `python`). Then:

```bash
pip install -r requirements.txt
python demo.py
python -m pytest
```

**JavaScript**

```bash
node demo.js
npm test
```

**TypeScript** (once: `npm install`, which installs TypeScript)

```bash
node demo.ts
npm test
```

At first every test fails: that is expected. Each function you finish turns its tests green. A failing test's message starts with **Not yet:** and says what it expected.


<details>
<summary>Stuck?</summary>

- **Where to look:** the catalog search is the lesson *One Song in a Million, in 20 Looks: Binary Search*, a **binary search**. The playlist search is *Is That Song in My Library? Linear Search*.
- **Start with `linearSearch`:** a loop, a match, and -1 after the loop. Counting its looks is the same loop with a counter that stops at the match.
- **The catalog search keeps three positions:** `low` and `high`, the first and last places the song could still be, and `middle`, halfway between them. Keep going while `low <= high`.
- **When the middle title comes before the one you want,** move `low` to `middle + 1`; when it comes after, move `high` to `middle - 1`.
- **The tests are the edge cases:** the first and last songs, songs missing before, after and in between, a one-song library and an empty one. If one fails, check it against the off-by-one table in the lesson.
- **Compare titles the lesson's way:** `string.CompareOrdinal` in C#, `compareTo` in Java, `<` in Python, JavaScript and TypeScript.

</details>

<details>
<summary>Why Should I Choose This?</summary>

Open this once your tests are green. The ticket's test is 10,000 searches in a million songs.

- **Reading from the top** (a linear search on the catalog): about 500,000 titles per search, 5 billion for the test. That's O(n) per search. Measured with this test, it got through fewer than 3,000 of the 10,000 searches in the second in every language (909 in Python), and the whole run would take from about 17 seconds in JavaScript to about 2 minutes in Python.
- **Jumping to the first letter:** about 38,000 titles per search if letters were even, still O(n), and still hundreds of millions of reads for the test.
- **Skipping ahead 1,000 at a time:** about 2,000 reads per search, 20 million for the test. Close, but 100 times the reads of the next try, and it still grows with the catalog.
- **Halving the catalog:** at most 20 reads per search, O(log n), 200,000 for the test, and a fraction of a second in every language. Twice the songs adds one read.
- **What it gives up:** it only works because the catalog is sorted. Here the sort happens once a night, before anyone searches, so it's paid once. A playlist that's searched once and changes all the time isn't worth sorting, which is why the ticket keeps the search that reads from the top.

</details>

## Hand it in

When it works, push your solution to a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. The lesson page shows the Git commands, step by step.
