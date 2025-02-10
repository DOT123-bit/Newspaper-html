<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AWARENESS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        h1 {
            color: black;
        }
        p {
            font-size: 16px;
            line-height: 1.8;
            color: black;
        }
        .article {
            text-align: center;
            padding: 20px;
            background-color: transparent;
            color: black;
        }
        /* Button styles */
        button {
            background-color: #4CAF50; 
            color: white;
            padding: 10px 20px;
            margin-top: 20px;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
    <script>
        // Function to display an alert
        function showAlert() {
            alert("Congratulations to Emma Davies for her historic victory in the marathon!");
        }

        // Function to change the background color
        function changeBackgroundColor() {
            document.body.style.backgroundColor = "#f0f8ff"; // Light blue color
        }

        // Function to toggle the visibility of the marathon result section
        function toggleResults() {
            var resultsSection = document.getElementById("results");
            if (resultsSection.style.display === "none") {
                resultsSection.style.display = "block";
            } else {
                resultsSection.style.display = "none";
            }
        }
    </script>
</head>
<body>

    <header>
        <h3>Name: Aroon Raju Sonkar</h3>
        <h3>Department: FYBSC-IT</h3>
        <h3>Roll No: <b>17092</b></h3>
        <h3>Date: 5<sup>th</sup> October 2024</h3>
        <h3>Day: Saturday</h3>
    </header>

    <hr>

    <div class="article">
        <h1><u>Newspaper Article</u></h1>
        <h2>Historic Victory for Local Marathon Runner</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CiHBy1QEdg0WBXTgCDrrGM7cVg4DNVvDBQ&s" alt="Marathon Runner" width="500">
        <p><strong>Date:</strong> October 5, 2024</p>
        <p><strong>By:</strong> AROON RAJU SONKAR</p>

        <p>Yesterday marked a historic moment in the city's annual marathon as local runner Emma Davies secured her first-ever victory, crossing the finish line in an impressive 2 hours and 34 minutes. The 29-year-old athlete not only outpaced the competition but also set a new course record, surpassing the previous best by nearly two minutes.</p>

        <p>Davies, who has been training relentlessly for the past two years, was ecstatic as she raised her arms in triumph at the finish line. “I’ve dreamed of this moment for so long,” she said. “To win here, in my hometown, with my family and friends cheering me on — it’s a feeling I’ll never forget.”</p>

        <p>The marathon drew a record number of participants this year, with over 10,000 runners from across the country. Weather conditions were near perfect, with cool temperatures and clear skies aiding runners throughout the 26.2-mile course that winds through the city’s most iconic landmarks.</p>

        <p>Close behind Davies was runner-up Sarah Lee, who finished just over three minutes later, with a time of 2 hours and 37 minutes. Lee, a seasoned marathoner, praised Davies' performance. “She ran an incredible race today. It was her moment, and she deserved it.”</p>

        <p>The men’s race was equally competitive, with Kenyan runner Daniel Kiptoo claiming victory in 2 hours and 9 minutes. Kiptoo, who is now preparing for the Olympic trials, said he was pleased with his performance and is focused on future goals.</p>

        <p>This year’s marathon will go down in history not only for the record-breaking performances but for the community spirit it fostered. Thousands lined the streets to cheer on runners, and the event raised over $200,000 for local charities.</p>

        <p>As Davies reflects on her achievement, she already has her eyes on the next challenge. “I’m going to keep pushing myself. This win is just the beginning.”</p>

        <!-- Section for results -->
        <div id="results">
            <h3>Marathon Results</h3>
            <p><strong>1st Place:</strong> Emma Davies - 2 hours 34 minutes (New Course Record)</p>
            <p><strong>2nd Place:</strong> Sarah Lee - 2 hours 37 minutes</p>
            <p><strong>Men’s Winner:</strong> Daniel Kiptoo - 2 hours 9 minutes</p>
        </div>

        <!-- Button to toggle visibility of results -->
        <button onclick="toggleResults()">Toggle Marathon Results</button>

        <!-- Button to show an alert -->
        <button onclick="showAlert()">Show Victory Alert</button>

        <!-- Button to change background color -->
        <button onclick="changeBackgroundColor()">Change Background Color</button>
    </div>

</body>
</html>
