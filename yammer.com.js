

// hide the useless sidebar

$("<style>#sidebar, #uni-messages {display: none !important;}</style>").appendTo(document.body);

function fixTitle() { document.title = "Yammer"; }

for (var i = 0; i < 5000; i += 50) {
  setTimeout(fixTitle, i);
}
