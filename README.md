# Exercise: Find the Song

Exercise code for the lesson **Exercise: Find the Song** in the course *Data Structures and Big-O, Demystified* on [ask-codey.com](https://www.ask-codey.com).

A music app needs a search. You'll write it two ways, linear search and binary search, and count how many titles each one looks at, so you can see the difference grow. There are four functions to finish:

- `linearSearch` (`LinearSearch` in C#, `linear_search` in Python): a song's position in any list, read from the top, or -1 when it isn't there
- `linearLooks` (`LinearLooks`, `linear_looks`): how many titles that search reads
- `binarySearch` (`BinarySearch`, `binary_search`): a song's position in a list sorted A to Z, found by halving, or -1
- `binaryLooks` (`BinaryLooks`, `binary_looks`): how many titles the binary search looks at

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

## Tips

- **Start with `linearSearch`.** It's the locker search from *Linear Search: Checking Every Locker*: a loop, a match, and -1 after the loop.
- **Counting looks is the same loop with a counter.** Add one for every title you read, and stop counting at the match.
- **Binary search needs `low <= high`, `middle + 1` and `middle - 1`.** The tests try the first song, the last song, missing songs before, after and in between, a one-song library and an empty one: the edge cases from *Binary Search: Guess My Number*.
- **Compare titles the lesson's way:** `string.CompareOrdinal` in C#, `compareTo` in Java, `<` in Python, JavaScript and TypeScript.

## Hand it in

When it works, push your solution to a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. The lesson page shows the Git commands, step by step.
