// A mock function to mimic making an async request for data
export function fetchData(amount = 1) {
  return  fetch("  https://jsonplaceholder.typicode.com/photos")
  .then(response => response.json())
  .then(data => data);
}
