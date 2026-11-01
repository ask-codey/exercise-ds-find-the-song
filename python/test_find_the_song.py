# The tests for your four functions. You don't need to change this file.
# Each message says what was expected, so a failing test tells you what to look at.
from find_the_song import binary_looks, binary_search, linear_looks, linear_search

UNSORTED = ["Midnight Bus", "Lemon Skies", "Slow Rain", "Paper Boats", "Neon Garden", "Quiet Harbor", "Sunday Static", "Golden Hour"]
LIBRARY = ["Amber Road", "Blue Hour", "Copper Moon", "Desert Lights", "Echo Park", "Falling Up", "Golden Hour", "Harbor Lights", "Lemon Skies", "Midnight Bus", "Neon Garden", "Paper Boats", "Quiet Harbor", "Slow Rain", "Sunday Static", "Velvet Train"]


def big_library():
    return [f"Song {i:04d}" for i in range(1, 1001)]


def test_linear_search_finds_each_song():
    assert linear_search(UNSORTED, "Midnight Bus") == 0, "Not yet: Midnight Bus is the first song, at position 0."
    assert linear_search(UNSORTED, "Slow Rain") == 2, "Not yet: Slow Rain is at position 2."
    assert linear_search(UNSORTED, "Golden Hour") == 7, "Not yet: Golden Hour is the last song, at position 7."


def test_linear_search_gives_minus_one_for_a_missing_song():
    assert linear_search(UNSORTED, "Quiet Harbor") == 5, "Not yet: Quiet Harbor is at position 5."
    assert linear_search(UNSORTED, "Blue Hour") == -1, "Not yet: Blue Hour isn't in the list, so the answer is -1."
    assert linear_search(UNSORTED, "slow rain") == -1, 'Not yet: capital letters count, so "slow rain" isn\'t in the list.'


def test_linear_looks_count_every_title_read():
    assert linear_looks(UNSORTED, "Midnight Bus") == 1, "Not yet: the first song takes 1 look."
    assert linear_looks(UNSORTED, "Slow Rain") == 3, "Not yet: Slow Rain, at position 2, takes 3 looks."
    assert linear_looks(UNSORTED, "Golden Hour") == 8, "Not yet: the last of 8 songs takes 8 looks."
    assert linear_looks(UNSORTED, "Blue Hour") == 8, "Not yet: a missing song means reading all 8 titles."


def test_binary_search_finds_the_first_middle_and_last_songs():
    assert binary_search(LIBRARY, "Amber Road") == 0, "Not yet: Amber Road is the first song, at position 0."
    assert binary_search(LIBRARY, "Quiet Harbor") == 12, "Not yet: Quiet Harbor is at position 12."
    assert binary_search(LIBRARY, "Velvet Train") == 15, "Not yet: Velvet Train is the last song, at position 15."


def test_binary_search_gives_minus_one_for_missing_songs():
    assert binary_search(LIBRARY, "Blue Hour") == 1, "Not yet: Blue Hour is at position 1."
    assert binary_search(LIBRARY, "Above the Clouds") == -1, "Not yet: Above the Clouds would come before the first song, and it isn't there."
    assert binary_search(LIBRARY, "Window Seat") == -1, "Not yet: Window Seat would come after the last song, and it isn't there."
    assert binary_search(LIBRARY, "Orange Sky") == -1, "Not yet: Orange Sky would come between Neon Garden and Paper Boats, and it isn't there."


def test_binary_search_handles_tiny_libraries():
    assert binary_search(["Slow Rain"], "Slow Rain") == 0, "Not yet: in a one-song library, the song is at position 0."
    assert binary_search(["Slow Rain"], "Blue Hour") == -1, "Not yet: Blue Hour isn't in a library that only has Slow Rain."
    assert binary_search([], "Slow Rain") == -1, "Not yet: an empty library has no songs, so the answer is -1."


def test_binary_looks_halve_what_is_left():
    assert binary_looks(LIBRARY, "Harbor Lights") == 1, "Not yet: Harbor Lights is the first middle, position 7, so it takes 1 look."
    assert binary_looks(LIBRARY, "Quiet Harbor") == 4, "Not yet: Quiet Harbor takes 4 looks, as in the lesson."
    assert binary_looks(LIBRARY, "Orange Sky") == 4, "Not yet: a missing song takes 4 looks in a library of 16."


def test_a_thousand_songs_take_at_most_ten_binary_looks():
    big = big_library()
    assert linear_looks(big, "Song 1000") == 1000, "Not yet: a linear search reads all 1,000 titles to reach the last one."
    assert binary_looks(big, "Song 1000") == 10, "Not yet: a binary search reaches the last of 1,000 songs in 10 looks."
    for position, song in enumerate(big):
        assert binary_search(big, song) == position, f"Not yet: {song} is at position {position}."
        assert binary_looks(big, song) <= 10, "Not yet: no song in 1,000 should take more than 10 binary looks."
