# Architecture

## Environment tool
CI/CD: Jenkins 
Containerization: Docker
Container Orchestration: Minikube
Version control: github
K8s managed: helm

## Setup local enviroment
Refer to Infra repo:
https://github.com/anle20/Infra-elsa/blob/main/README.md

## Deploy Hackathon-app from local
Using deploy.sh to deploy
cd ./script
./deploy.sh

Step:
1. We will need to deploy MongoDB first
2. After that, using helm to deploy application

## Deploy Hackathon-app through CICD
We use Jenkins operator (master-slave) which is deployed on K8s. Refer to below diagram

![cicd](https://github.com/user-attachments/assets/afb1e671-f407-44ec-91e5-9f0bed532b7b)

1. We will need to deploy MongoDB manually first
kubectl apply -f ../deployment/db/mongodb-deployment.yaml

2. Trigger hackathon pipeline on jenkins
<img width="1070" alt="Screenshot 2024-09-16 at 21 15 30" src="https://github.com/user-attachments/assets/24c2b4f3-d3ee-4da0-8b08-d2d9903cdc4e">
<img width="1298" alt="Screenshot 2024-09-16 at 21 15 45" src="https://github.com/user-attachments/assets/be2a163b-e0bd-4960-886f-8a18dd016130">

## Wish Feature
1. Config PVC for MongoDB to save the data to local
2. Monitoring:
We can use Prometheus and Grafana to monitor metrics
3. Logging:
We can use EFK(Elastic search - Fluentd - Kibana) stack to collect the log and vizualiztion

## Cloud Architecture

Architecture Components:
- Amazon ECR (Elastic Container Registry): Stores and manages container images used by Amazon EKS clusters.
- Amazon EKS Cluster: A managed Kubernetes cluster that runs containerized applications.
- Internet Gateway: Allows traffic to flow between the EKS cluster and the internet.
- Load Balancer (Service in Kubernetes): Distributes traffic across multiple instances of a containerized application.
- Auto-Scaling: Automatically scales the number of instances of a containerized application based on demand
- Availability Zones: Physically separate data centers that provide redundancy and fault tolerance.
- Public Subnets: Subnets that allow communication with the internet.
- Private Subnets: Subnets that do not allow communication with the internet
- DocumentDB: Store data (replace to MongoDB)

![cloud drawio](https://github.com/user-attachments/assets/fe4afa5b-dadf-4974-be0a-d274ed67bbae)















