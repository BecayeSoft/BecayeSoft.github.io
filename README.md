# Becaye's Portfolio & Blog
My personal portfolio and blog.

## Deploying to Firebase
See <a href="https://firebase.google.com/docs/hosting/angular#initialize_an_existing_project">Initialize an existing project</a>
The `firebase.json` file contains a source that points to the workspace (See `firebase.json`).

Build & Deploy the app
```
ng build --prod
firebase deploy
```

## Deploying to github pages
Build the app
```
ng build --prod
```
Put the content of the dist/becayesoft-portfolio-blog/ inside becayesoft.github.io/docs/

## Dependencies
Package                         Version
---------------------------------------------------------
*  @angular-devkit/architect       0.1301.4
*  @angular-devkit/build-angular   13.1.4
*  @angular-devkit/core            13.1.4
*  @angular-devkit/schematics      13.1.4
*  @angular/cdk                    13.3.3
*  @angular/cli                    13.1.4
*  @angular/fire                   7.5.0
*  @angular/material               13.3.3
*  @schematics/angular             13.1.4
*  rxjs                            7.4.0
*  typescript                      4.5.5
