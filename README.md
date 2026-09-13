# To-Do App — Production DevOps Project

## Overview

A production-style cloud-native deployment of a React To-Do application on AWS EKS using Infrastructure as Code, containerization, CI/CD, GitOps, monitoring, and alerting.

## Architecture

Developer → GitHub → CircleCI → Docker → Amazon ECR → GitHub Kubernetes Manifests → ArgoCD → Amazon EKS → To-Do Application

Monitoring:

Prometheus → Grafana → Alertmanager → Slack

Infrastructure:

Terraform → AWS VPC → EKS → IAM → ECR → S3 → DynamoDB

## Technology Stack

- React / Vite
- Docker
- Nginx
- Kubernetes
- Amazon EKS
- Amazon ECR
- Terraform
- CircleCI
- ArgoCD
- Prometheus
- Grafana
- Alertmanager
- Slack
- Amazon S3
- Amazon DynamoDB
- AWS EBS CSI



## Project Status

Completed production-level DevOps implementation.
