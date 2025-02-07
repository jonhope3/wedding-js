A base Next.js app that can be deployed as a static site.

### Run

`npm run dev`

### Deployment
Make sure to update the `.env.production` file to match the repo name. This will help avoiding the page showing up "blank". 
Reminder that sensitive variables should not be stored in the `.env.production` file if the repo is public.

This repo has GitHub Actions enabled to deploy the app when it is pushed:
The Workflows for these actions are located at [in the .github directory](.github/workflows/).
- [Cloudflare Pages Deployment](.github/workflows/cf-deploy.yaml)
  - Repo may be private
- [Cloudflare Pages Deployment](.github/workflows/gh-deploy.yaml)
  - Repo must be public

These workflows are configured to deploy conditionally based on the branch that the code is pushed to.