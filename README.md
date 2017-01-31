# pbSpinwheel 

It's based on [Polymer](https://www.polymer-project.org/1.0/).
Separate template and logic code into 2 files (.js, and .html).

The project utilize toolchain as provided from [basepolymerit](https://github.com/haxpor/basepolymerit).

# Intention

The aim of this project is to use only what's needed, and stay close to native platform or say pure javascript as much as possible.  
It doesn't depend on big library that would change the way (or get in the way, or require much higher knowledge) to work on with this project.

Whenever need to integrate to any project that already depended to specific library such as React, Angular 2, etc, it can still do so with slightly less effort.

# Why Chose to Do It This Way?

It's bacause developing from bottom to upper is much better in sense of web development. If this component depends one big dependency, then when it needs to support other users that use different library, it will find a very hard time to do that. We might have to migrate code for multiple times, or every time a new popular library pops up.

Thus this project stays low closely to native platform as much as possible, and depends on dependencies that are only necessary.

# How to

The startup project is generated via [basepolymerit-cli](https://github.com/haxpor/basepolymerit-cli).  
Commands to manage project and development are centralized into NPM's run scripts as follows, see [basepolymerit](https://github.com/haxpor/basepolymerit) for available commands such as `npm start`, `npm test`, `npm run server`, and couple more.

# Misc
This project is based on [https://github.com/haxpor/basepolymerit](https://github.com/haxpor/basepolymerit)

# License

This project is licensed under copyrights. You can see the license [here](https://github.com/playbasis/spinwheel-js/blob/master/README.md).

# Contact

Contact [devteam@playbasis.com](mailto:devteam@playbasis.com) if you have any question, or stuck in integration to your project.
