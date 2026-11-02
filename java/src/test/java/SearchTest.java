import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;

// The tests for your four methods. You don't need to change this file.
// Each message says what was expected, so a failing test tells you what to look at.
class SearchTest {
    private static final List<String> UNSORTED = List.of("Midnight Bus", "Lemon Skies", "Slow Rain", "Paper Boats", "Neon Garden", "Quiet Harbor", "Sunday Static", "Golden Hour");
    private static final List<String> LIBRARY = List.of("Amber Road", "Blue Hour", "Copper Moon", "Desert Lights", "Echo Park", "Falling Up", "Golden Hour", "Harbor Lights", "Lemon Skies", "Midnight Bus", "Neon Garden", "Paper Boats", "Quiet Harbor", "Slow Rain", "Sunday Static", "Velvet Train");

    private static List<String> bigLibrary() {
        List<String> big = new ArrayList<>();
        for (int i = 1; i <= 1000; i++) {
            big.add(String.format("Song %04d", i));
        }
        return big;
    }

    @Test
    void linearSearchFindsEachSong() {
        assertEquals(0, Search.linearSearch(UNSORTED, "Midnight Bus"), "Not yet: Midnight Bus is the first song, at position 0.");
        assertEquals(2, Search.linearSearch(UNSORTED, "Slow Rain"), "Not yet: Slow Rain is at position 2.");
        assertEquals(7, Search.linearSearch(UNSORTED, "Golden Hour"), "Not yet: Golden Hour is the last song, at position 7.");
    }

    @Test
    void linearSearchGivesMinusOneForAMissingSong() {
        assertEquals(5, Search.linearSearch(UNSORTED, "Quiet Harbor"), "Not yet: Quiet Harbor is at position 5.");
        assertEquals(-1, Search.linearSearch(UNSORTED, "Blue Hour"), "Not yet: Blue Hour isn't in the list, so the answer is -1.");
        assertEquals(-1, Search.linearSearch(UNSORTED, "slow rain"), "Not yet: capital letters count, so \"slow rain\" isn't in the list.");
    }

    @Test
    void linearLooksCountEveryTitleRead() {
        assertEquals(1, Search.linearLooks(UNSORTED, "Midnight Bus"), "Not yet: the first song takes 1 look.");
        assertEquals(3, Search.linearLooks(UNSORTED, "Slow Rain"), "Not yet: Slow Rain, at position 2, takes 3 looks.");
        assertEquals(8, Search.linearLooks(UNSORTED, "Golden Hour"), "Not yet: the last of 8 songs takes 8 looks.");
        assertEquals(8, Search.linearLooks(UNSORTED, "Blue Hour"), "Not yet: a missing song means reading all 8 titles.");
    }

    @Test
    void binarySearchFindsTheFirstMiddleAndLastSongs() {
        assertEquals(0, Search.binarySearch(LIBRARY, "Amber Road"), "Not yet: Amber Road is the first song, at position 0.");
        assertEquals(12, Search.binarySearch(LIBRARY, "Quiet Harbor"), "Not yet: Quiet Harbor is at position 12.");
        assertEquals(15, Search.binarySearch(LIBRARY, "Velvet Train"), "Not yet: Velvet Train is the last song, at position 15.");
    }

    @Test
    void binarySearchGivesMinusOneForMissingSongs() {
        assertEquals(1, Search.binarySearch(LIBRARY, "Blue Hour"), "Not yet: Blue Hour is at position 1.");
        assertEquals(-1, Search.binarySearch(LIBRARY, "Above the Clouds"), "Not yet: Above the Clouds would come before the first song, and it isn't there.");
        assertEquals(-1, Search.binarySearch(LIBRARY, "Window Seat"), "Not yet: Window Seat would come after the last song, and it isn't there.");
        assertEquals(-1, Search.binarySearch(LIBRARY, "Orange Sky"), "Not yet: Orange Sky would come between Neon Garden and Paper Boats, and it isn't there.");
    }

    @Test
    void binarySearchHandlesTinyLibraries() {
        assertEquals(0, Search.binarySearch(List.of("Slow Rain"), "Slow Rain"), "Not yet: in a one-song library, the song is at position 0.");
        assertEquals(-1, Search.binarySearch(List.of("Slow Rain"), "Blue Hour"), "Not yet: Blue Hour isn't in a library that only has Slow Rain.");
        assertEquals(-1, Search.binarySearch(List.of(), "Slow Rain"), "Not yet: an empty library has no songs, so the answer is -1.");
    }

    @Test
    void binaryLooksHalveWhatIsLeft() {
        assertEquals(1, Search.binaryLooks(LIBRARY, "Harbor Lights"), "Not yet: Harbor Lights is the first middle, position 7, so it takes 1 look.");
        assertEquals(4, Search.binaryLooks(LIBRARY, "Quiet Harbor"), "Not yet: Quiet Harbor takes 4 looks, as in the lesson.");
        assertEquals(4, Search.binaryLooks(LIBRARY, "Orange Sky"), "Not yet: a missing song takes 4 looks in a library of 16.");
    }

    @Test
    void aThousandSongsTakeAtMostTenBinaryLooks() {
        List<String> big = bigLibrary();
        assertEquals(1000, Search.linearLooks(big, "Song 1000"), "Not yet: a linear search reads all 1,000 titles to reach the last one.");
        assertEquals(10, Search.binaryLooks(big, "Song 1000"), "Not yet: a binary search reaches the last of 1,000 songs in 10 looks.");
        for (int position = 0; position < big.size(); position++) {
            assertEquals(position, Search.binarySearch(big, big.get(position)), "Not yet: " + big.get(position) + " is at position " + position + ".");
            assertTrue(Search.binaryLooks(big, big.get(position)) <= 10, "Not yet: no song in 1,000 should take more than 10 binary looks.");
        }
    }

    @Test
    void tenThousandSearchesInAMillionSongsTakeUnderASecond() {
        List<String> catalog = new ArrayList<>();
        for (int i = 1; i <= 1000000; i++) {
            catalog.add(String.format("Song %07d", i));
        }
        assertTrue(Search.binaryLooks(catalog, "Song 1000000") <= 20, "Not yet: the last of a million songs should take at most 20 binary looks.");
        assertTrue(Search.binaryLooks(catalog, "Song 0000000") <= 20, "Not yet: a song missing from a million songs should take at most 20 binary looks.");
        long started = System.nanoTime();
        for (int k = 1; k <= 10000; k++) {
            String title = String.format("Song %07d", k * 100);
            assertEquals(k * 100 - 1, Search.binarySearch(catalog, title), "Not yet: " + title + " is at position " + (k * 100 - 1) + " of the million.");
            assertTrue(System.nanoTime() - started < 1_000_000_000L, "Not yet: the ticket allows 1 second for 10,000 searches in a million songs, and " + k + " searches took longer. A search that halves what's left reads about 20 titles a search.");
        }
    }
}
