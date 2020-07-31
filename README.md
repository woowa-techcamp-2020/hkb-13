# HKB-13

## ✋Team Members
- [![title](https://img.shields.io/badge/DEVLOPER-노기진-123456)](https://github.com/nohgijin)
- [![title](https://img.shields.io/badge/DEVLOPER-한규현-123456)](https://github.com/dnacu)


### Documentations
- [API Document](https://github.com/woowa-techcamp-2020/hkb-13/issues/2)
- [Postman API Document](https://documenter.getpostman.com/view/8220125/T1Dv6ZKB?version=latest)

## 🧞Quick Start
### 1. Clone & Install Packages
```bash
git clone https://github.com/woowa-techcamp-2020/hkb-13
cd hbk-13
npm install
```

### 2. Configuration database
Follow `config.example.js` to `config` folder
```js
const config = {
  DB_HOST: '',
  DB_NAME: '',
  DB_USER: '',
  DB_PW: '',
}

module.exports = { config }
```

### 3. NPM scripts
start both server and client
```bash
npm start
```
start server
```bash
npm run start:server
```
start client
```bash
npm run start:client
```
build production artifacts
```bash
npm run build
```
Then, you can access to your server http://localhost:3000/

------

## Technologies Used
**Frontend**
- ![title](https://img.shields.io/badge/-HTML5-E34F26?&logo=html5&logoColor=white)
- ![title](https://img.shields.io/badge/-SCSS-CC6699?&logo=Sass&logoColor=white)
- ![title](https://img.shields.io/badge/-Vanila_javascript-EDD63F?&logo=javascript&logoColor=white)
- ![title](https://img.shields.io/badge/-Webpack-7ac5f1?&logo=Webpack&logoColor=white)
- ![title](https://img.shields.io/badge/-Babel-eece4f?&logo=Babel&logoColor=white)

**Backend**
- ![title](https://img.shields.io/badge/-Node.js-339933?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-Express-191919?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white)

**ETC**
- ![title](https://img.shields.io/badge/-EC2-232F3E?&logo=Amazon-AWS&logoColor=white)
- ![title](https://img.shields.io/badge/-Github-181717?&logo=Github&logoColor=white)
- ![title](https://img.shields.io/badge/-Slack-4A154B?&logo=Slack&logoColor=white)
- ![title](https://img.shields.io/badge/-Postman-4A154B?&logo=Postman&logoColor=white)

------

## 프로젝트 구조
