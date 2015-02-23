System.config({
  "baseURL": "/",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  },
  "shim": {
    "packages": {
      "dogfalo/materialize": {
        "format": "global",
        "deps": [
          "jquery"
        ]
      }
    }
  }
});

System.config({
  "map": {
    "dogfalo/materialize": "github:dogfalo/materialize@0.95.2",
    "jquery": "github:components/jquery@2.1.3"
  }
});

