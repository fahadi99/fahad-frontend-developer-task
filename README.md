# fahad-frontend-developer-task

# Interactive Element Tracking Tool

I have created this Interactive Element Tool with very basic but functional and interactive UI. This tool allows users to select and track interactions on a mock webpage. It offers a visual interface for selecting elements, simulating events, and displaying a dashboard with interaction data.

## Table of Contents

1. [Introduction](#introduction)
2. [Approach](#approach)
3. [Challenges Faced](#challenges-faced)
4. [Prerequisites](#prerequisites)
5. [Running the Tool](#running-the-tool)
6. [Testing the Solution](#testing-the-solution)
7. [Code Structure](#code-structure)
8. [Functionality](#functionality)
9. [Code Quality](#code-quality)
10. [UI/UX](#uiux)

## Introduction

The Interactive Element Tracking Tool is a web-based solution that allows users to interact with elements on a webpage and track their interactions. It offers a selection mode that highlights elements when hovered over, marks elements for tracking when clicked, simulates event tracking (via mock Google Tag Manager), and provides a dashboard for displaying interaction data.

## Approach

- **Selection Mode**: Users can enter selection mode by pressing the 'S' key. This enables them to interact with elements.
- **Selection and Tracking**: Hovering over interactive elements highlights them, and clicking marks them for tracking with a clear visual border.
- **Event Simulation**: When elements are marked for tracking, the tool simulates sending events to a mock Google Tag Manager. The events are logged in the console.
- **Dashboard**: A dashboard on the side lists all selected elements and the count of interactions for each.

## Challenges Faced

While implementing this tool, several challenges were faced:

- **Simulated Event Logging**: Simulating events and logging them to a mock Google Tag Manager required a clear understanding of event handling in JavaScript.
- **Design and Styling**: Creating a pleasant and functional design was challenging, including defining a clear visual indicator for selected elements.

## Prerequisites

- A modern web browser (e.g., Google Chrome, Mozilla Firefox)
- A code editor for viewing and modifying HTML, CSS, and JavaScript files.

## Running the Tool

To run the Interactive Element Tracking Tool:

1. Clone or download the provided repository.
2. Open the HTML file (`index.html`) in a web browser.

## Testing the Solution

Follow these steps to test the tool:

1. Open the tool in a web browser.
2. Press 'S' to enter selection mode.
3. Hover over interactive elements (e.g., buttons, links) to highlight them.
4. Click on elements to select them for tracking (they will have a border).
5. Interact with the selected elements (e.g., click on them). Simulated events will be logged in the browser's console.
6. Press 'S' again to exit selection mode.

## Code Structure

The tool consists of three main files:

- `index.html`: Contains the HTML structure of the webpage.
- `styles.css`: Provides CSS for styling the webpage.
- `script.js`: Contains JavaScript code for handling interactions and event simulation.

## Functionality

- **Selection Mode**: Activated by pressing 'S' to enter and exit selection mode.
- **Selection and Unselection**: Users can select and unselect interactive elements.
- **Event Simulation**: Simulates sending events to a mock Google Tag Manager.
- **Dashboard**: Displays a list of selected elements and the count of interactions.

## Code Quality

- The JavaScript code is clean, organized, and adheres to best practices.
- Event handling is structured with clear event listeners and functions.
- The code can be further improved with comments for better documentation.

## UI/UX

- The tool is intuitive, with selection mode enabled by the 'S' key.
- The design is pleasant, and selected elements are clearly indicated with a border.

This concludes the documentation for the Interactive Element Tracking Tool. Users can interact with elements on a mock webpage, track their interactions, and observe event simulation. The tool provides an interface for exploring user engagement with web elements.
