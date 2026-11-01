using FindTheSong;

namespace FindTheSong.Tests;

// The tests for your four methods. You don't need to change this file.
// Each message says what was expected, so a failing test tells you what to look at.

[TestClass]
public class SearchTests
{
    private static readonly List<string> Unsorted = new List<string> { "Midnight Bus", "Lemon Skies", "Slow Rain", "Paper Boats", "Neon Garden", "Quiet Harbor", "Sunday Static", "Golden Hour" };
    private static readonly List<string> Library = new List<string> { "Amber Road", "Blue Hour", "Copper Moon", "Desert Lights", "Echo Park", "Falling Up", "Golden Hour", "Harbor Lights", "Lemon Skies", "Midnight Bus", "Neon Garden", "Paper Boats", "Quiet Harbor", "Slow Rain", "Sunday Static", "Velvet Train" };

    private static List<string> BigLibrary()
    {
        List<string> big = new List<string>();
        for (int i = 1; i <= 1000; i++)
        {
            big.Add("Song " + i.ToString("D4"));
        }
        return big;
    }

    [TestMethod]
    public void LinearSearchFindsEachSong()
    {
        Assert.AreEqual(0, Search.LinearSearch(Unsorted, "Midnight Bus"), "Not yet: Midnight Bus is the first song, at position 0.");
        Assert.AreEqual(2, Search.LinearSearch(Unsorted, "Slow Rain"), "Not yet: Slow Rain is at position 2.");
        Assert.AreEqual(7, Search.LinearSearch(Unsorted, "Golden Hour"), "Not yet: Golden Hour is the last song, at position 7.");
    }

    [TestMethod]
    public void LinearSearchGivesMinusOneForAMissingSong()
    {
        Assert.AreEqual(5, Search.LinearSearch(Unsorted, "Quiet Harbor"), "Not yet: Quiet Harbor is at position 5.");
        Assert.AreEqual(-1, Search.LinearSearch(Unsorted, "Blue Hour"), "Not yet: Blue Hour isn't in the list, so the answer is -1.");
        Assert.AreEqual(-1, Search.LinearSearch(Unsorted, "slow rain"), "Not yet: capital letters count, so \"slow rain\" isn't in the list.");
    }

    [TestMethod]
    public void LinearLooksCountEveryTitleRead()
    {
        Assert.AreEqual(1, Search.LinearLooks(Unsorted, "Midnight Bus"), "Not yet: the first song takes 1 look.");
        Assert.AreEqual(3, Search.LinearLooks(Unsorted, "Slow Rain"), "Not yet: Slow Rain, at position 2, takes 3 looks.");
        Assert.AreEqual(8, Search.LinearLooks(Unsorted, "Golden Hour"), "Not yet: the last of 8 songs takes 8 looks.");
        Assert.AreEqual(8, Search.LinearLooks(Unsorted, "Blue Hour"), "Not yet: a missing song means reading all 8 titles.");
    }

    [TestMethod]
    public void BinarySearchFindsTheFirstMiddleAndLastSongs()
    {
        Assert.AreEqual(0, Search.BinarySearch(Library, "Amber Road"), "Not yet: Amber Road is the first song, at position 0.");
        Assert.AreEqual(12, Search.BinarySearch(Library, "Quiet Harbor"), "Not yet: Quiet Harbor is at position 12.");
        Assert.AreEqual(15, Search.BinarySearch(Library, "Velvet Train"), "Not yet: Velvet Train is the last song, at position 15.");
    }

    [TestMethod]
    public void BinarySearchGivesMinusOneForMissingSongs()
    {
        Assert.AreEqual(1, Search.BinarySearch(Library, "Blue Hour"), "Not yet: Blue Hour is at position 1.");
        Assert.AreEqual(-1, Search.BinarySearch(Library, "Above the Clouds"), "Not yet: Above the Clouds would come before the first song, and it isn't there.");
        Assert.AreEqual(-1, Search.BinarySearch(Library, "Window Seat"), "Not yet: Window Seat would come after the last song, and it isn't there.");
        Assert.AreEqual(-1, Search.BinarySearch(Library, "Orange Sky"), "Not yet: Orange Sky would come between Neon Garden and Paper Boats, and it isn't there.");
    }

    [TestMethod]
    public void BinarySearchHandlesTinyLibraries()
    {
        Assert.AreEqual(0, Search.BinarySearch(new List<string> { "Slow Rain" }, "Slow Rain"), "Not yet: in a one-song library, the song is at position 0.");
        Assert.AreEqual(-1, Search.BinarySearch(new List<string> { "Slow Rain" }, "Blue Hour"), "Not yet: Blue Hour isn't in a library that only has Slow Rain.");
        Assert.AreEqual(-1, Search.BinarySearch(new List<string>(), "Slow Rain"), "Not yet: an empty library has no songs, so the answer is -1.");
    }

    [TestMethod]
    public void BinaryLooksHalveWhatIsLeft()
    {
        Assert.AreEqual(1, Search.BinaryLooks(Library, "Harbor Lights"), "Not yet: Harbor Lights is the first middle, position 7, so it takes 1 look.");
        Assert.AreEqual(4, Search.BinaryLooks(Library, "Quiet Harbor"), "Not yet: Quiet Harbor takes 4 looks, as in the lesson.");
        Assert.AreEqual(4, Search.BinaryLooks(Library, "Orange Sky"), "Not yet: a missing song takes 4 looks in a library of 16.");
    }

    [TestMethod]
    public void AThousandSongsTakeAtMostTenBinaryLooks()
    {
        List<string> big = BigLibrary();
        Assert.AreEqual(1000, Search.LinearLooks(big, "Song 1000"), "Not yet: a linear search reads all 1,000 titles to reach the last one.");
        Assert.AreEqual(10, Search.BinaryLooks(big, "Song 1000"), "Not yet: a binary search reaches the last of 1,000 songs in 10 looks.");
        for (int position = 0; position < big.Count; position++)
        {
            Assert.AreEqual(position, Search.BinarySearch(big, big[position]), "Not yet: " + big[position] + " is at position " + position + ".");
            Assert.IsTrue(Search.BinaryLooks(big, big[position]) <= 10, "Not yet: no song in 1,000 should take more than 10 binary looks.");
        }
    }
}
