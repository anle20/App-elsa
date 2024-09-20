# Architecture

## Environment tool
- CI/CD: Jenkins 
- Containerization: Docker
- Container Orchestration: Minikube
- Version control: github
- K8s managed: helm

## Setup local enviroment
Refer to Infra repo:
https://github.com/anle20/Infra-elsa

## Deploy Hackathon-app from local
Using deploy.sh to deploy
```bash
cd ./script
./deploy.sh
```

1. We will need to deploy MongoDB first
2. After that, using helm to deploy application
3. Now open the browser and enter hackathon-elsa.example

## Deploy Hackathon-app through CICD
We use Jenkins operator (master-slave) which is deployed on K8s. Refer to below diagram

![cicd](https://github.com/user-attachments/assets/f7ba7def-013c-4727-910b-8b913d368b08)


1. We will need to deploy MongoDB manually first
kubectl apply -f ../deployment/db/mongodb-deployment.yaml

2. Trigger hackathon pipeline on jenkins
<img width="1070" alt="Screenshot 2024-09-16 at 21 15 30" src="https://github.com/user-attachments/assets/4a505f5e-6f9d-4bc0-823c-59855f90750e">
<img width="1298" alt="Screenshot 2024-09-16 at 21 15 45" src="https://github.com/user-attachments/assets/549817d4-8305-45c2-aa0b-e1ecf253e8eb">



## Wish Feature
1. Monitoring:
We can use Prometheus and Grafana to monitor metrics
2. Logging:
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

![cloud drawio](https://github.com/user-attachments/assets/7951914c-5a8c-4f58-a9e6-0d9d849d49ea)
















