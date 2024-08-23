// JavaScript code integrated with the HTML

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "agent1.@cctb.ca",
  },
  {
    name: "Tom MacDonalds",
    phone: "(0191) 777 6495",
    email: "agent2.@cctb.ca",
  },
  {
    name: "Helen Richards",
    phone: "(0191) 0800 1111",
    email: "agent3.@cctb.ca",
  },
];

function addContact() {
  let userChoice;

  do {
    userChoice = prompt("Choose an option: first, last, new, or quit");

    if (userChoice === "first") {
      if (contacts.length > 0) {
        alert(
          "First contact: " +
            contacts[0].name +
            " / " +
            contacts[0].phone +
            " / " +
            contacts[0].email
        );
      } else {
        alert("The contact list is empty.");
      }
    } else if (userChoice === "last") {
      if (contacts.length > 0) {
        alert(
          "Last contact: " +
            contacts[contacts.length - 1].name +
            " / " +
            contacts[contacts.length - 1].phone +
            " / " +
            contacts[contacts.length - 1].email
        );
      } else {
        alert("The contact list is empty.");
      }
    } else if (userChoice === "new") {
      let newName = prompt("Enter name:");
      let newPhone = prompt("Enter phone number:");
      let newEmail = prompt("Enter email address:");

      // Validate input
      if (
        !newName ||
        isNaN(newPhone) ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
      ) {
        alert(
          "Invalid input. Please make sure the name is not empty, the phone number contains only digits, and the email is in the correct format."
        );
        continue;
      }

      // Add new contact
      contacts.push({
        name: newName,
        phone: newPhone,
        email: newEmail,
      });
      alert(
        "New contact added: " + newName + " / " + newPhone + " / " + newEmail
      );
      updateContactList(); // Update the displayed contact list
    } else if (userChoice === "quit") {
      break;
    }
  } while (true);
}

function updateContactList() {
  let contactsList = document.getElementById("contact-list");
  contactsList.innerHTML = ""; // Clear current list

  contacts.forEach((contact) => {
    let listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = `${contact.name} / ${contact.phone} / ${contact.email}`;
    contactsList.appendChild(listItem);
  });
}

function deleteAllContacts() {
  contacts = []; // Clear the contacts array
  updateContactList(); // Update the displayed contact list
  alert("All contacts have been deleted.");
}

// Initial call to display the contacts
updateContactList();
