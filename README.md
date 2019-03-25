<p align="center"><img src="https://raw.githubusercontent.com/zumcoin/zum-assets/master/ZumCoin/zumcoin_logo_design/3d_green_lite_bg/ZumLogo_800x200px_lite_bg.png" width="400"></p>

### Master Build Status
[![Build Status](https://travis-ci.org/zumcoin/zumcoin-cryptonote-util.svg?branch=master)](https://travis-ci.org/zumcoin-cryptonote-util/zumcoin) [![Build status](https://ci.appveyor.com/api/projects/status/github/zumcoin/zumcoin-cryptonote-util?branch=master&svg=true)](https://ci.appveyor.com/project/zumcoin/zumcoin-cryptonote-util/branch/master)


### Development Build Status
[![Build Status](https://travis-ci.org/zumcoin/zumcoin-cryptonote-util.svg?branch=development)](https://travis-ci.org/zumcoin-cryptonote-util/zumcoin) [![Build status](https://ci.appveyor.com/api/projects/status/github/zumcoin/zumcoin-cryptonote-util?branch=development&svg=true)](https://ci.appveyor.com/project/zumcoin/zumcoin-cryptonote-util/branch/development)

[![NPM](https://nodei.co/npm/zumcoin-cryptonote-util.png?downloads=true&stars=true)](https://nodei.co/npm/zumcoin-cryptonote-util/)

# Zumcoin-Cryptonote-Util

Supported on the following platforms:

* Linux 64-bit
* Windows 64-bit

## Dependencies

* NodeJS (https://nodejs.org/) v6/8/10
* Boost (http://www.boost.org/)

## Installation Instructions

### *Nix

```bash
sudo apt-get install libboost-all-dev
git clone https://github.com/zumcoin/zumcoin-cryptonote-util
cd zumcoin-cryptonote-util
npm install && npm test
```

### Windows

#### Prerequisite

Read very carefully if you want this to work right the first time.

1) Open a *Windows Powershell* console as **Administrator**
2) Run the command: `npm install -g windows-build-tools --vs2015`
   ***This will take a while.***
   
Once the prerequisites are complete, proceed with the following:

```bash
cd <your zumcoin-cryptonote-util directory>
npm install && npm test
```
