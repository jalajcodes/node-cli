# node-cli

This a small command line interface tool to create empty files with extensions.

To install:

1. Clone this repository : ``` git clone https://github.com/thevip/node-cli.git ```
2. In the cloned directory run ``` npm install ``` (it will install necessary dependencies.)
3. In the same directory run ``` node index.js ``` to run the CLI.


To execute this script anywhere add a bin section in your ``` package.json ``` file and run ``` npm link ```

```
{
  "name": "creator",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "thevip",
  "license": "ISC",
  "dependencies": {
    "chalk": "^2.4.1",
    "figlet": "^1.2.0",
    "inquirer": "^6.0.0",
    "shelljs": "^0.8.2"
  },
  "bin": {
    "creator": "./index.js"
  }
}
```

```
$ npm link
$ creator
```

#Thanks!
