provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "Terraform-EKS-Todo"
      Environment = "Dev"
      ManagedBy   = "Terraform"
      Owner       = "Shravan"
    }
  }
}
