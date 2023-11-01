let selectionMode = false;
const selectedElements = new Map(); // Map to store selected elements and interaction counts

document.addEventListener('keydown', (event) => {
    if (event.key === 's' || event.key === 'S') {
        selectionMode = !selectionMode;
        if (selectionMode) {
            console.log('Selection mode is ON. Click on interactive elements to select for tracking.');
        } else {
            console.log('Selection mode is OFF.');
        }
    }
});

document.querySelectorAll('.button-container button, .link-container a, .dropdown-container select').forEach((element) => {
    element.addEventListener('mouseenter', (event) => {
        if (selectionMode) {
            event.target.classList.add('hovered');
        }
    });

    element.addEventListener('mouseleave', (event) => {
        if (selectionMode) {
            event.target.classList.remove('hovered');
        }
    });

    element.addEventListener('click', (event) => {
        if (selectionMode) {
            event.preventDefault();
            const elementType = getElementType(event.target);
            const elementLabel = getElementLabel(event.target);

            if (event.target.classList.contains('selected')) {
                // If already selected, unselect it
                event.target.classList.remove('selected');
                unselectEventInGTM(elementType, elementLabel);
                if (selectedElements.has(elementLabel)) {
                    selectedElements.set(elementLabel, selectedElements.get(elementLabel) - 1);
                    if (selectedElements.get(elementLabel) === 0) {
                        selectedElements.delete(elementLabel);
                    }
                }
            } else {
                // If not selected, mark it for tracking
                event.target.classList.add('selected');
                sendEventToGTM(elementType, elementLabel);
                if (selectedElements.has(elementLabel)) {
                    selectedElements.set(elementLabel, selectedElements.get(elementLabel) + 1);
                } else {
                    selectedElements.set(elementLabel, 1);
                }
            }
            
            updateDashboard();
        }
    });
});

function getElementType(element) {
    if (element.tagName === 'BUTTON') {
        return 'button';
    } else if (element.tagName === 'A') {
        return 'link';
    } else if (element.tagName === 'SELECT') {
        return 'dropdown';
    }
    return 'unknown';
}

function getElementLabel(element) {
    return element.textContent.trim();
}

function sendEventToGTM(elementType, elementLabel) {
    const eventMessage = `Event sent to GTM: Type - ${elementType}, Label - ${elementLabel}`;
    console.log(eventMessage);
}

function unselectEventInGTM(elementType, elementLabel) {
    const eventMessage = `Event unselected in GTM: Type - ${elementType}, Label - ${elementLabel}`;
    console.log(eventMessage);
}

function updateDashboard() {
    const selectedElementsList = document.getElementById('selected-elements-list');
    selectedElementsList.innerHTML = '';

    for (const [label, count] of selectedElements) {
        const listItem = document.createElement('li');
        listItem.textContent = `${label} (Interactions: ${count})`;
        selectedElementsList.appendChild(listItem);
    }
}
