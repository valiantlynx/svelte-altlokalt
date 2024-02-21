
## Developing
start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

To create a production version of your app:

```bash
yarn build

or if you have docker installed

docker-compose -f docker-compose.dev.yml up -d --build
```

You can preview the production build with `yarn preview`.
or if you used docker go to http://localhost:3000


> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


# deploy-nodeapp-terraform-ansible

## Steps to deploy
### Configure AWS 
```hcl
Replace this credentials in main.tf

provider "aws" {
  region     = "AWS_REGION"
  access_key = "AWS_ACCESS_KEY"
  secret_key = "AWS_SECRET_KEY"
}
```

## Command to execute
### Initialize terraform
```hcl
terraform init
```

### Run terraform script
```hcl
terraform apply

Enter Name of the SSH key pair
```

### Destroy all resouces
```hcl
terraform destroy
```
https://www.youtube.com/watch?v=alAZl5udvAI