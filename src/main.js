document.body.innerHTML = "<ul>" + [1, 2, 3].map(n => n * 2).map(n => `<li>${n}</li>`).join("") + "</ul>";
