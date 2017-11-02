react-beyond-tech-test
==============

Simple React SPA that consumes a YouTube API JSON feed and displays a set of results within a playlist. Clicking each video will show a detail view with the ability to play the video.

### Demo available [here](https://tctc91.github.io/react-beyond-tech-test/)

### Time spent: 4 hours

### Build Notes

* Built in a TDD style (test first) using Jest & Enzyme
* Only the functional requirements/tasks have been completed
* Follows the React container/component pattern. Higher order functions / business logic handled in the containers whilst components are dumb/stateless
* Markup follows the BEM CSS pattern
* No styling - Responsive design is an area I'm highly experienced in. I've lead various custom greenfield responsive build projects as well as iterative piece by piece responsive build projects over the years.
* No pagination added. See my NPM package on something which I would have liked to implement [here](https://github.com/tctc91/react-infinite-scroll-waypoint)
* No animations/transitions - interaction design is something I'm experienced in and enjoy very much. See some animation examples [here](http://tomchristian.co.uk/). Plenty of examples from private client work available on request

### Installation

```
$ git clone git@github.com:tctc91/react-beyond-tech-test.git
$ npm i
$ npm start
```

### Run Tests

```
$ npm run test
```