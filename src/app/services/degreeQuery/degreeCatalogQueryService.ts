import { GetAllDegreeCatalogsRequest, GetDegreeCatalogRequest } from './protos/degreeCatalogQuery_pb'
import { DegreeCatalogServiceClient } from './protos/DegreeCatalogQueryServiceClientPb'
import { Metadata } from 'grpc-web'
import { Int32Value } from 'google-protobuf/google/protobuf/wrappers_pb'

const client = new DegreeCatalogServiceClient('https://setting.bysharing.org/query/degrees', null)
const metadata: Metadata = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA5MSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwOTEifQ.xTJ8BTeGM_5uec9zAt4Ea6t1ws_9YBG4XjjwyrAbOWs`
}

export const queryService = {
    getAll: async () => {
        const request = new GetAllDegreeCatalogsRequest()
        const response = await client.getAllDegreeCatalogs(request, metadata)
        return response
    },
    getById: async (id: number) => {
        const request = new GetDegreeCatalogRequest()
        const intValue = new Int32Value().setValue(id)
        request.setId(intValue)
        const response = await client.getDegreeCatalog(request, metadata)
        return response
    }
}
