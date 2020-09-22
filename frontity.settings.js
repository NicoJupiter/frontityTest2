const settings = {
  "name": "frontity-website",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "custom-theme",
      "state": {}
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://testwordpress/wp-json",
          "postTypes": [
            {
              type: "projets",
              endpoint: "projets",
              archive: "/projets"
            },
            {
              type: "cafes",
              endpoint: "cafes",
              archive: "/cafes"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
