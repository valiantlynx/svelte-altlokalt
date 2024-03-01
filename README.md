### preequisite 
ansible is only able to run on linux
an S3 bucket with the correct name(same as in terraform/provider.tf in s3.bucket )

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
### terraform
```hcl
terraform init
```

```hcl
terraform validate
```

```hcl
terraform plan
```

```hcl
terraform apply --auto-approve
```

### Destroy all resouces
```hcl
terraform destroy --auto-approve
```

### ansible
```bash
ansible-playbook -i 13.60.38.190, -e "ansible_user=ubuntu ansible_ssh_private_key_file=modules/pk/terraform-key.pem" ../ansible/deploy-app.yml
ansible-playbook -i modules/ec2/dynamic_inventory.ini ../ansible/deploy-app.yml
```

https://www.youtube.com/watch?v=alAZl5udvAI