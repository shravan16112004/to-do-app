provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "Terraform-EKS-Todo"
      Environment = "Production"
      ManagedBy   = "Terraform"
      Owner       = "Shravan"
    }
  }
}
