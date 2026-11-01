import java.util.ArrayList;
import java.util.List;

// Tries your methods on the lesson's library. Run it with: java src/main/java/Demo.java
public class Demo {
    public static void main(String[] args) {
        List<String> library = List.of("Amber Road", "Blue Hour", "Copper Moon", "Desert Lights", "Echo Park", "Falling Up", "Golden Hour", "Harbor Lights", "Lemon Skies", "Midnight Bus", "Neon Garden", "Paper Boats", "Quiet Harbor", "Slow Rain", "Sunday Static", "Velvet Train");

        System.out.println("Library: " + library.size() + " songs, A to Z");
        for (String title : new String[] {"Quiet Harbor", "Orange Sky"}) {
            System.out.println(title + ": linear finds position " + Search.linearSearch(library, title) + " in " + Search.linearLooks(library, title)
                + " looks; binary finds position " + Search.binarySearch(library, title) + " in " + Search.binaryLooks(library, title) + " looks");
        }

        List<String> big = new ArrayList<>();
        for (int i = 1; i <= 1000; i++) {
            big.add(String.format("Song %04d", i));
        }
        System.out.println("1,000 songs, the last one: linear takes " + Search.linearLooks(big, "Song 1000") + " looks; binary takes " + Search.binaryLooks(big, "Song 1000") + " looks");
    }
}
