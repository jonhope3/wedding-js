A base Next.js app that can be deployed as a static site. 

### Run
`npm run dev`

### Deploy
This repo has GitHub Actions enabled to deploy the app to GitHub Pages when it is pushed.
The Workflow for these actions is located at [in the .github directory](.github/workflows/deploy.yaml).

Make sure to update the `.env.production` file to match your repo's name.