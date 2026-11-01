# Tries your functions on the lesson's library. Run it with: python demo.py
from find_the_song import binary_looks, binary_search, linear_looks, linear_search

library = ["Amber Road", "Blue Hour", "Copper Moon", "Desert Lights", "Echo Park", "Falling Up", "Golden Hour", "Harbor Lights", "Lemon Skies", "Midnight Bus", "Neon Garden", "Paper Boats", "Quiet Harbor", "Slow Rain", "Sunday Static", "Velvet Train"]

print(f"Library: {len(library)} songs, A to Z")
for title in ["Quiet Harbor", "Orange Sky"]:
    print(f"{title}: linear finds position {linear_search(library, title)} in {linear_looks(library, title)} looks; "
          f"binary finds position {binary_search(library, title)} in {binary_looks(library, title)} looks")

big = [f"Song {i:04d}" for i in range(1, 1001)]
print(f"1,000 songs, the last one: linear takes {linear_looks(big, 'Song 1000')} looks; binary takes {binary_looks(big, 'Song 1000')} looks")
