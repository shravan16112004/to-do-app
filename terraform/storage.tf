# ==============================
# S3 Bucket
# ==============================

resource "aws_s3_bucket" "todo_storage" {
  bucket = "todo-app-storage-660852786197"

  tags = {
    Name        = "todo-app-storage"
    Environment = "production"
    Project     = "todo-app"
  }
}

# Block all public access
resource "aws_s3_bucket_public_access_block" "todo_storage" {
  bucket = aws_s3_bucket.todo_storage.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Enable versioning
resource "aws_s3_bucket_versioning" "todo_storage" {
  bucket = aws_s3_bucket.todo_storage.id

  versioning_configuration {
    status = "Enabled"
  }
}

# Default server-side encryption
resource "aws_s3_bucket_server_side_encryption_configuration" "todo_storage" {
  bucket = aws_s3_bucket.todo_storage.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}


# ==============================
# DynamoDB Table
# ==============================

resource "aws_dynamodb_table" "todo_table" {
  name         = "todo-app-table"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Name        = "todo-app-table"
    Environment = "production"
    Project     = "todo-app"
  }
}
