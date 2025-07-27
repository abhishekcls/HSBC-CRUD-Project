//document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/api/items'; // Adjust the API URL as needed

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    const displayData = (data) => {
        const resultContainer = document.getElementById('results');
        resultContainer.innerHTML = ''; // Clear previous results

        data.forEach(item => {
            const div = document.createElement('div');
            //div.textContent = JSON.stringify(item); // Display the item as a JSON string
            div.textContent = `ID: ${item.id}, Name: ${item.name}, Description: ${item.description}`; // Customize as needed
            resultContainer.appendChild(div);
        });

        data.forEach(item => console.log(item)); // Log each item to the console};
    }

    // code to store data via POST request
    const storeData = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('Storing data...'); // Log the action for debugging
        const form = document.getElementById('postDataForm');
        const itemData = new FormData(form);
        const item = {
            id: itemData.get('id'),
            name: itemData.get('name'),
            description: itemData.get('description')
        };
        console.log('Storing item:', item); // Log the item to be stored
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Data stored successfully:', data);
            //fetchData(); // Refresh the displayed data
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };
    // Call the fetchData function to load data when the page is ready
//});