// function toggleAddForm() {
//     const form = document.getElementById('add-property-form');
//     form.style.display = form.style.display === 'block' ? 'none' : 'block';
//   }

function toggleAddForm() {
    const form = document.getElementById("add-property-form");
    form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
}


  function addProperty(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const location = document.getElementById('location').value;
    const rent = document.getElementById('rent').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;

    const card = document.createElement('div');
    card.className = 'house-card';
    card.innerHTML = `
      <img src="${image}" alt="${title}">
      <div class="house-info">
        <h3>${title}</h3>
        <p>Location: ${location}</p>
        <p>Rs. ${rent}/month</p>
        <p>${description}</p>
        <a href="#" class="view-btn">View Details</a>
        <button class="delete-btn" onclick="deleteProperty(this)">Delete</button>
      </div>
    `;
    document.getElementById('property-list').appendChild(card);
    document.getElementById('add-property-form').reset();
    toggleAddForm();
  }

  function deleteProperty(button) {
    const propertyCard = button.closest('.house-card');
    propertyCard.remove();
  }