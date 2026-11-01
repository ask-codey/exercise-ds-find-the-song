using FindTheSong;

// Tries your methods on the lesson's library. Run it with: dotnet run --project FindTheSong
List<string> library = new List<string> { "Amber Road", "Blue Hour", "Copper Moon", "Desert Lights", "Echo Park", "Falling Up", "Golden Hour", "Harbor Lights", "Lemon Skies", "Midnight Bus", "Neon Garden", "Paper Boats", "Quiet Harbor", "Slow Rain", "Sunday Static", "Velvet Train" };

Console.WriteLine("Library: " + library.Count + " songs, A to Z");
foreach (string title in new string[] { "Quiet Harbor", "Orange Sky" })
{
    Console.WriteLine(title + ": linear finds position " + Search.LinearSearch(library, title) + " in " + Search.LinearLooks(library, title)
        + " looks; binary finds position " + Search.BinarySearch(library, title) + " in " + Search.BinaryLooks(library, title) + " looks");
}

List<string> big = new List<string>();
for (int i = 1; i <= 1000; i++)
{
    big.Add("Song " + i.ToString("D4"));
}
Console.WriteLine("1,000 songs, the last one: linear takes " + Search.LinearLooks(big, "Song 1000") + " looks; binary takes " + Search.BinaryLooks(big, "Song 1000") + " looks");
