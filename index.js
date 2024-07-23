// Define the plugin function
async function calculatePathLength() {
    // Ensure a document is open
    if (!app.activeDocument) {
        alert("No document is open.");
        return;
    }

    // Ensure a layer is selected
    const activeLayer = app.activeDocument.activeLayer;
    if (!activeLayer) {
        alert("No layer is selected.");
        return;
    }

    // Ensure the selected layer has a path
    const path = activeLayer.path;
    if (!path) {
        alert("No path is selected.");
        return;
    }

    // Calculate the length of the path
    let totalLength = 0;
    for (let i = 0; i < path.segments.length - 1; i++) {
        const segment1 = path.segments[i];
        const segment2 = path.segments[i + 1];
        const length = Math.sqrt(
            Math.pow(segment2.point.x - segment1.point.x, 2) +
            Math.pow(segment2.point.y - segment1.point.y, 2)
        );
        totalLength += length;
    }

    // Display the length
    alert(`Total Path Length: ${totalLength.toFixed(2)} pixels`);
}

// Add the plugin to the Photopea menu
app.addMenuItem({
    title: "Calculate Path Length",
    action: calculatePathLength,
    shortcut: "Ctrl+Alt+L"
});