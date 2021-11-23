# Apollo Client `defaultOptions`

To reproduce:

- clone this repo
- cd into it and `yarn install`
- migrate the database with `yarn rw prisma migrate dev`
- start the dev server with `yarn rw dev`
- navigate to `localhost:8910/posts`
- click "+ New Post"
- fill out the form
- you should be redirected back to the empty page, and if you open the network tab you should see that another query hasn't been fired off
