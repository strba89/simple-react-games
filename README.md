# simple-react-games
 Created Simple Games using only the best JS library REACT💪


##Getting Started

    yarn

    yarn start

##Scss to Css

    yarn watch-css

##Running the tests

    yarn test

##Deployment

 **Build a development version of the project**

    yarn build


#YARN

&Fast, reliable, and secure dependency management.

    https://yarnpkg.com/en/

    https://github.com/yarnpkg/yarn

Fast: Yarn caches every package it has downloaded, so it never needs to download the same package again. It also does almost everything concurrently to maximize resource utilization. This means even faster installs.

Reliable: Using a detailed but concise lockfile format and a deterministic algorithm for install operations, Yarn is able to guarantee that any installation that works on one system will work exactly the same on another system.

Secure: Yarn uses checksums to verify the integrity of every installed package before its code is executed.

##Installation

####&Debian/Ubuntu Linux

&On Debian or Ubuntu Linux, you can install Yarn via our Debian package repository. You will first need to configure the repository:

    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
&On Ubuntu 16.04 or below and Debian Stable, you will also need to configure the NodeSource repository to get a new enough version of Node.js.

&Then you can simply:

    sudo apt-get update
    sudo apt-get install yarn

####&macOS

Homebrew

You can install Yarn through the Homebrew package manager. This will also install Node.js if it is not already installed.

    brew install yarn
If you use nvm or similar, you should exclude installing Node.js so that nvm’s version of Node.js is used.

    brew install yarn --without-node
MacPorts

You can install Yarn through MacPorts. This will also install Node.js if it is not already installed.

    sudo port install yarn
Upgrade Yarn

Yarn will warn you if a new version is available. To upgrade Yarn, you can do so with Homebrew.

    brew upgrade yarn
Another way to install find https://yarnpkg.com/en/docs/install#mac-tab

##Usage

Adding a dependency

    yarn add [package]
    yarn add [package]@[version]
    yarn add [package]@[tag]
    Adding a dependency to different categories of dependencies

Add to devDependencies, peerDependencies, and optionalDependencies respectively:

    yarn add [package] --dev
    yarn add [package] --peer
    yarn add [package] --optional

Upgrading a dependency

    yarn upgrade [package]
    yarn upgrade [package]@[version]
    yarn upgrade [package]@[tag]

Removing a dependency

    yarn remove [package]


Installing all the dependencies of project

    yarn

    or

    yarn install

#FLOW
####Flow is a static type checker for javascript.

    https://flow.org/

    https://github.com/facebook/flow

Flow typed
flow-typed is a repository of third-party library interface definitions for use with Flow.

You can grab definitions directly from this GitHub repo, or you can use the CLI (currently in beta) to install a libdef for a given library:

    yarn global add flow-typed
    yarn add flow-bin
    flow-typed install

Getting started whit Flow
Initialize Flow by running the following command in the root of your project

    yarn flow init

Add the following to the top of all the files you want to typecheck

    /* @flow */
Run

    yarn flow