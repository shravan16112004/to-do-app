provider "aws" {
  region = "ap-south-1"

  default_tags {
    tags = {
      Project     = "Terraform-EKS-Todo"
      Environment = "Dev"
      ManagedBy   = "Terraform"
      Owner       = "Shravan"
    }
  }
}
