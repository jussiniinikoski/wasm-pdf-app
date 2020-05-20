import("./index.js").then(wasm => {
  fetch("./text-example.json")
    .then(response => {
      return response.json();
    })
    .then(doc => {
      // Change the title to show date (now)
      let date = new Date().toLocaleString();
      let title = doc.contents[0].params;
      title.text += " (created: " + date + ")";
      wasm.createPDF(doc);
    });
}).catch(e => console.error("Error importing `index.js`:", e));