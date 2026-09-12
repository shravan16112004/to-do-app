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

## Project Documentation

1. [Project Overview](docs/01-project-overview.md)
2. [Architecture](docs/02-architecture.md)
3. [Prerequisites](docs/03-prerequisites.md)
4. [AWS Setup](docs/04-aws-setup.md)
5. [Terraform](docs/05-terraform.md)
6. [Docker](docs/06-docker.md)
7. [Amazon ECR](docs/07-ecr.md)
8. [Kubernetes](docs/08-kubernetes.md)
9. [CircleCI](docs/09-circleci.md)
10. [ArgoCD](docs/10-argocd.md)
11. [Prometheus](docs/11-prometheus.md)
12. [Grafana](docs/12-grafana.md)
13. [Alertmanager](docs/13-alertmanager.md)
14. [Slack Alerting](docs/14-slack-alerting.md)
15. [Port Forwarding](docs/15-port-forwarding.md)
16. [Troubleshooting](docs/16-troubleshooting.md)
17. [Cleanup](docs/17-cleanup.md)
18. [Project Validation](docs/18-project-validation.md)

## Interview Preparation

Interview questions and project explanations are maintained in the `interview/` directory.

## Command Cheat Sheet

See [CHEATSHEET.md](CHEATSHEET.md).

## Project Status

Under active development and production-level restructuring.
