import { gql } from '@apollo/client';


export const API_URL = 'https://top-api.talview.org/v1/graphql'
export const AUTH_TOKEN = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzMmNjMWNiMjg5ZGQ0NjI2YTQzNWQ3Mjk4OWFlNDMyMTJkZWZlNzgiLCJ0eXAiOiJKV1QifQ.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IlgtSGFzdXJhLURlZmF1bHQtUm9sZSI6Ik1BU1RFUl9SRUNSVUlURVIiLCJYLUhhc3VyYS1BbGxvd2VkLVJvbGVzIjpbIk1BU1RFUl9SRUNSVUlURVIiLCJSRUNSVUlURVIiLCJFVkFMVUFUT1IiXSwiWC1IYXN1cmEtVXNlci1JZCI6IjU1NTEwIiwiWC1IYXN1cmEtVGVuYW50LUlkIjoiMyJ9LCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9wLWRldi0zNTY3MTAiLCJhdWQiOiJ0b3AtZGV2LTM1NjcxMCIsImF1dGhfdGltZSI6MTcwMzY1OTU5MiwidXNlcl9pZCI6IlZYcUl1YWNpSFVhNkVZWWh3UXd3bVJkdTcwSTMiLCJzdWIiOiJWWHFJdWFjaUhVYTZFWVlod1F3d21SZHU3MEkzIiwiaWF0IjoxNzAzNjU5NTkyLCJleHAiOjE3MDM2NjMxOTIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.bwMl-JKPp2EqqySrhOUMLU4-olkaTuiIh2NeoGJW-C_4D_fdD0LrsYh3tI96qdpmtNCyt0ok0ILi4Vp064mQnhmrLwPjfnX1_eHpGjMCt87OehjveIEk-ATRPCk6CTDiJAfZ40ZersNylQBZs_rsWlpwyCfRdHiu-Ei5OBK9WYpx7JReIJGYBvSCo4PBUcK5Yz8xqp4vI1La0qyVte9uvru-ENcXveTgeYerCE4XlQ7d-9GyZ4g4thU9pFw-7t-mgxQ8Al-ZQ7y7QCK7_uMo5cVJGmzj8rHfQrbxTGYN-kQrisAa5JOE7frPWg42_h41TM9yC5venXuu7JJuWzj7FQ'

export const FETCH_GQL_QUERY = gql`
  query MyQuery {
    auth_user(limit: 20) {
      email
      id
      name
      username
      roles {
        role
      }
    }
  }
`;


export const FETCH_QUERY = `
  query MyQuery {
    auth_user(limit: 20) {
      email
      id
      name
      username
      roles {
        role
      }
    }
  }
`;
