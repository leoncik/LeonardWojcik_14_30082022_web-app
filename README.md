# HRnet

Project carried out as part of the Front-End Web Development Career Path of OpenClassrooms.

## Table of contents

-   [Description](#description)
    -   [Scenario and missions](#scenario-and-missions)
-   [Installation](#installation)
-   [How to use](#how-to-use)
    -   [Launch and edit the project](#launch-and-edit-the-project)
    -   [Use the tests](#use-the-tests)
-   [Performance report](#performance-report)

## Description

### Scenario and missions

HRnet is an internal application (for the fictional company "Wealth Health") to create and view employee records. For this project I had two main missions :

**1) Convert the original HRnet app into a React app.**  
The original HRnet app was heavily relying on JQuery code and I had to convert the app ([that you can find on this branch](https://github.com/leoncik/LeonardWojcik_14_30082022_web-app/tree/hrnet-jquery-version)) into a React app to improve performances and fix [bugs](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues) related to JQuery.

[See below](#performance-report) for the performance report.

**2) Convert one of the JQuery plugins into a React component and publish It as an npm package**  
I decided to convert the [selectmenu](https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js) plugin. You can find the code of the converted plugin and It's documentation on this repo : https://github.com/leoncik/LeonardWojcik_14_30082022_plugin.

## Installation

1. Get this repository's content by [direct download](https://github.com/leoncik/LeonardWojcik_14_30082022_web-app/archive/refs/heads/main.zip) or by cloning It :

```sh
git clone https://github.com/leoncik/LeonardWojcik_14_30082022_web-app.git
```

2. Make sure that [Node.js](https://nodejs.org/en/) is installed on your machine and that you have a package manager (like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)).

Then install the dependencies :

```sh
yarn install
```

3. You are ready to go!

## How to use

### Launch and edit the project

1. Make sure that you are in the root directory of the project.
2. Run `yarn dev`.
3. You should be able to view the website on : http://localhost:5173/

### Use the tests

To run and watch the tests in the console, run : `yarn test`.

To get a coverage report while running the tests, run : `yarn coverage`. If you want to visualize the coverage report, you can run a live server (if you are using VSCode, I recommend using [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) and use this url : http://127.0.0.1:5500/coverage/

## Performance report

I have used [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) in order to compare the performances of the old website and the new one.  
The report shows that the new website is approximately 8% more performant than the old one and also more secure (the _Best practices_ category is now at 100%).

Here are all the reports :

|                | Home page | Employee page |
| -------------- | --------- | ------------- |
| JQuery version | Report    | Report        |
| React version  | Report    | Report        |
