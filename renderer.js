const data = {
  1012: {
    firstName: 'Emma',
    lastName: 'Collins',
    jobTitle: 'Product manager',
    department: 'Product management',
    emailId: 'emma.collins@gmail.com',
    manager: 'Artur slatter',
    city: 'Boston',
    state: 'MA',
    zipCode: '02101',
  },
  1007: {
    firstName: 'Ryan ',
    lastName: 'Mitchell',
    jobTitle: 'Consultant',
    department: 'Legal',
    emailId: 'ryan.mitchellyahoo.com',
    manager: 'Concordia Botler',
    city: 'Cleveland',
    state: 'OH',
    zipCode: '44101',
  },
  1043: {
    firstName: 'Olivia ',
    lastName: 'Bennett',
    jobTitle: 'Graphic designer',
    department: 'Design',
    emailId: 'olivia.bennett@outlook.com',
    manager: 'Curtice Ansley',
    city: 'Nashville',
    state: 'TN',
    zipCode: '37201',
  },
  1029: {
    firstName: 'Ethan ',
    lastName: '',
    jobTitle: 'Sales associate',
    department: 'Sales',
    emailId: 'ethan.parker@mail.com',
    manager: 'Wilt prop',
    city: 'Milwaukee',
    state: 'WI',
    zipCode: '53201',
  },
  1035: {
    firstName: 'Tony ',
    lastName: 'Stark',
    jobTitle: 'Project Manager',
    department: 'Engineering',
    emailId: 'Ironman@gmail.com',
    manager: 'Bonita Scroggs',
    city: 'Portland',
    state: 'OR',
    zipCode: '97201',
  },
  1048: {
    firstName: 'Liam ',
    lastName: 'Turner',
    jobTitle: 'Customer support Director',
    department: 'services',
    emailId: 'liam.turner@protonmail.com',
    manager: 'Amable Shimony',
    city: 'Pittsburgh',
    state: 'PA',
    zipCode: '15201',
  },
};

function handleFormSubmit(event) {
  event.preventDefault();

  const empIdInput = document.getElementById('emp-id').value;
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const emailIdInput = document.getElementById('email-id');
  const cityInput = document.getElementById('city');
  const zipCodeInput = document.getElementById('zip-code');
  const jobTitleInput = document.getElementById('job-title');
  const departmentInput = document.getElementById('department');
  const managerInput = document.getElementById('manager');
  const stateInput = document.getElementById('state');

  firstNameInput.value = data[empIdInput].firstName;
  lastNameInput.value = data[empIdInput].lastName;
  emailIdInput.value = data[empIdInput].emailId;
  cityInput.value = data[empIdInput].city;
  zipCodeInput.value = data[empIdInput].zipCode;
  jobTitleInput.value = data[empIdInput].jobTitle;
  departmentInput.value = data[empIdInput].department;
  managerInput.value = data[empIdInput].manager;
  stateInput.value = data[empIdInput].state;
}
