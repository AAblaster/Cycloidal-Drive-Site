// Grab elements from the DOM
const fileInput = document.getElementById('fileInput');
const dropZone = document.getElementById('dropZone');
const userInput = document.getElementById('userInput');
const displayTitle = document.getElementById('displayTitle');
const imgContainer = document.getElementById('imgContainer');
const uploadText = document.getElementById('uploadText');

// 1. Live Text Update
userInput.addEventListener('input', (e) => {
    displayTitle.textContent = e.target.value || "PREVIEW_VOID";
});

// 2. Trigger File Browser
dropZone.addEventListener('click', () => fileInput.click());

// 3. Handle File Selection
fileInput.addEventListener('change', function() {
    processFile(this.files[0]);
});

function processFile(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            imgContainer.innerHTML = `<img src="${e.target.result}" class="animate__animated animate__zoomIn">`;
            imgContainer.classList.remove('hidden');
            uploadText.textContent = `LOADED: ${file.name.toUpperCase()}`;
            uploadText.classList.add('text-blue-400');
        };
        
        reader.readAsDataURL(file);
    }
}

// 4. Drag and Drop Logic
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "#3b82f6";
});

dropZone.addEventListener('dragleave', () => {
    dropZone.style.borderColor = "#334155";
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    processFile(e.dataTransfer.files[0]);
});

// 5. Button Interaction
document.getElementById('actionBtn').addEventListener('click', () => {
    alert("System: Data Encrypted and Deployed to Local Session.");
});
