const fs = require('fs');
const faker = require('faker');

const generateLandingPage = () => ({
  title: faker.company.companyName(),
  content: faker.lorem.paragraphs(),
});

const generatePages = (numPages) => {
  for (let i = 0; i < numPages; i++) {
    const landingPage = generateLandingPage();
    fs.writeFileSync(`content/landingPage${i + 1}.json`, JSON.stringify(landingPage, null, 2));
  }
};

generatePages(1000);
