- What is `NPM`? 
Ans 

Its a package mangager that allows us to install package and have record of package i have install with verison 

●  - What is `Parcel/Webpack`? Why do we need it? 
- Parcel/Webpack is built in server is automactically strted when i parcel command 
- It give us HMR=> Hot Module Reloading Means If give we change any files The HMR will automatically will reflect the changes with no reload of page within  built in server.
- Development target means it be default disbaled the translation of Modern JS to old Browser.


 ●  - What is `.parcel-cache`
-  The **.cache folder** (or .parcel-cache in parcel v2) stores information about your project when **parcel builds** it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode. 
- I think committing it to git would be a bad idea - it would add a large number of (unnecessary) changes to your commit history, and it could easily get out-of-sync with the code that generated it.


 ●  - What is `npx` ? 
- Node Package Exectuable as in usage in Development side only install necessary not on Global purpose 
- local installs have links created at the ./node_modules/.bin/ directory

- global installs have links created from the global bin/ directory (for example: /usr/local/bin on Linux or at %AppData%/npm on Windows)


 ●  - What is difference between `dependencies` vs `devDependencies` 
Ans: 
Dependencies are the packages that are required for your application to run properly, devDependencies are the packages that are required for development and testing purposes only, and peerDependencies are the packages that your package expects to be installed in the user's environment

 ●  - What is Tree Shaking? 
 Ans:
- Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code or that code that not used
- In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

 ●  - What is Hot Module Replacement? 
 As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.


 ●  - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your 
 own words. 
 1 HMR 
 => As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.

 2  File watcher Algo 
 To support an optimal caching and development experience Parcel utilizes a very fast watcher written in C++ that integrates with low-level file watching functionality of each operating system. Using this watcher Parcel watches every file in your project root (including all node_modules). Based on events and metadata from these files, Parcel determines which files need to be rebuilt.


 
  ●  - What is `.gitignore`? What should we add and not add into it? 
- When you’re working in your copy, Git watches every file in and considers it in three ways:

- Tracked: You’ve already staged or committed the file.
- Untracked: You’ve not staged or committed.
    Ignored: You’ve explicitly told Git to ignore the file(s).
    The .gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo.


 ●  - What is the difference between `package.json` and `package-lock.json` 
 package.json is for Dev purpose whereas package-lock.json means for Production as it lock the version of Package that need for our web app to run
 
 
 ●  - Why should I not modify `package-lock.json`? 
 If you are manually editing files in node_modules , it is generally best to delete the file at node_modules/. package-lock. json . As the hidden lockfile is ignored by older npm versions, it does not contain the backwards compatibility affordances present in "normal" lockfiles.

 ●  - What is `node_modules` ? Is it a good idea to push that on git? 
 No its not a good idea to push on Git bcoz it contains alot of package that required for the React to run on local machine as on production side there by default node_modules present that automcataly fullfill the need of our projects packages .
 ●  - What is the `dist` folder? 
 
 Parcel's default directory for your output is named dist . The --dist-dir public tag defines the output folder for your production files and is named public to avoid confusion with the dist default directory.28-Sept-2022


 ●  - What is `browserlists`
 You can pick versions that have more than or less than a certain size of the audience worldwide, in a region, or in a country. You can also use the visitor data of your own website. 


 Read about dif bundlers: vite, webpack, parcel 
 ●  Read about:  ^ - caret and ~ - tilda 
 ^ this is for minor bugs fixed 
 ~ means recommend bug fixed 
 it automatically update our packages

 ●  Read about Script types in html (MDN Docs)

 The <script> tag is used to embed a client-side script (JavaScript).

The <script> element either contains scripting statements, or it points to an external script file through the src attribute.

Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.
