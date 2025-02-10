<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AWARENESS</title>
    <script>
        // Function to show an alert when a user clicks a button
        function showAlert() {
            alert("Thank you for helping in the fight against climate change!");
        }

        // Function to change the background color of the body when the button is clicked
        function changeBackgroundColor() {
            document.body.style.backgroundColor = "#e0f7fa"; // Light blue color
        }

        // Function to toggle visibility of the "Learn More" section
        function toggleLearnMore() {
            var section = document.getElementById("learnMore");
            if (section.style.display === "none") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        }
    </script>
</head>
<body>
    <header>
        <h3>Name: Aroon Raju Sonkar</h3>
        <h3>Department: <sup>FY</sup> BSC-IT</h3>
        <h3>Roll No: <b>17092</b></h3>
        <h3>Date: 5<sup>th</sup> October 2024</h3>
        <h3>Day: Saturday</h3>
    </header>

    <div class="article">
        <h1 align="center"><u>Awareness on Climate Change</u></h1>

        <h2>Understanding the Impact</h2>
        <p><strong>Climate change</strong> is one of the most pressing challenges facing humanity today. It refers to significant changes in global temperatures and weather patterns over time. While climate change is a natural phenomenon, scientific evidence shows that human activities are currently driving an unprecedented rate of change.</p>

        <p>Rising greenhouse gas emissions, particularly <em>carbon dioxide</em> and <em>methane</em>, have led to global warming, which is causing glaciers to melt, sea levels to rise, and extreme weather events to become more frequent.</p>

        <img src="https://th.bing.com/th/id/R.d96d0ef89080805106dedace4a30b270?rik=HinKGH3zCtjn3g&riu=http%3a%2f%2fwww.climatecouncil.org.au%2fuploads%2f8e0a4c3d88821f2423f0428a3dca0639.png&ehk=Vgu3ZyiJ9kSEFoTphOH0PusJn0gog%2b0%2bi3sXvDp%2fw0M%3d&risl=&pid=ImgRaw&r=0" alt="Climate Change Effects" />

        <h2>Statistics on Climate Change</h2>
        <table>
            <tr>
                <th>Year</th>
                <th>Global Temperature Increase (°C)</th>
                <th>Sea Level Rise (mm)</th>
            </tr>
            <tr>
                <td>2000</td>
                <td>0.5</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2010</td>
                <td>0.8</td>
                <td>25</td>
            </tr>
            <tr>
                <td>2020</td>
                <td>1.2</td>
                <td>75</td>
            </tr>
        </table>

        <h2>How You Can Help</h2>
        <p>Every individual can contribute to fighting climate change. Here are some <strong>simple steps</strong> you can take:</p>
        <ul>
            <li><a href="https://www.wikihow.com/Reduce-Your-Energy-Consumption#:~:text=Whether%20you%E2%80%99re%20looking%20to%20save%20money%20or%20simply%20decrease%20your" target="_blank">Reduce energy consumption</a></li>
            <li><a href="https://earthhow.com/reduce-reuse-recycle/#:~:text=This%20hierarchy%20shows%20that%20it%E2%80%99s%20best%20to%20reduce%20and%20reuse#:~:text=This%20hierarchy%20shows%20that%20it%E2%80%99s%20best%20to%20reduce%20and%20reuse" target="_blank">Recycle and reuse materials</a></li>
            <li><a href="https://www.nature.org/en-us/get-involved/how-to-help/plant-a-billion/#:~:text=What%20is%20Plant%20a%20Billion%20Trees?%20The%20Nature%20Conservancy%E2%80%99s%20Plant" target="_blank">Plant trees and support reforestation</a></li>
        </ul>

        <h3 id="reduce">Reduce Energy Consumption</h3>
        <p>Using energy-efficient appliances and turning off lights when not in use can significantly reduce your carbon footprint.</p>

        <h3 id="recycle">Recycle and Reuse Materials</h3>
        <p>Participating in local recycling programs helps reduce waste and conserve resources.</p>

        <h3 id="plant">Plant Trees</h3>
        <p>Trees absorb CO<sub>2</sub> and provide oxygen, making them crucial in combating climate change.</p>

        <h2 id="learnMore">Learn More</h2>
        <p>For further information, visit the <a href="https://www.nrdc.org/" target="_blank">Natural Resources Defense Council</a> for resources on climate change and sustainability.</p>

        <!-- Button to show alert -->
        <button onclick="showAlert()">Click here for a message</button>

        <!-- Button to change background color -->
        <button onclick="changeBackgroundColor()">Change Background Color</button>

        <!-- Button to toggle Learn More section -->
        <button onclick="toggleLearnMore()">Toggle Learn More Section</button>
    </div>

    <footer>
        <p>&copy; 2024 Aroon Raju Sonkar | Climate Change Awareness</p>
    </footer>
</body>
</html>
