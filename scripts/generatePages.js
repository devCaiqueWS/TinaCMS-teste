const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/content/paginatemplate1');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

for (let i = 1; i <= 1000; i++) {
  const pageData = {
    pageNumber: i,
    title: `Page ${i}`,
    content: `This is the content for page ${i}.`,
  };

  fs.writeFileSync(
    path.join(outputDir, `${i}.json`),
    JSON.stringify(pageData, null, 2)
  );
}

console.log('Pages generated successfully!');