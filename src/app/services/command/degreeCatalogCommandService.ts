import { Metadata } from 'grpc-web'
import { StringValue, Int64Value } from 'google-protobuf/google/protobuf/wrappers_pb'
import { DegreeCatalogServiceClient } from './protos/DegreeCatalogCommandServiceClientPb'
import { AddDegreeCatalogRequest, DeleteDegreeCatalogRequest, UpdateDegreeCatalogRequest } from './protos/degreeCatalogCommand_pb'
import { DegreesType } from '~/app/types/DegreesType.type'

const client = new DegreeCatalogServiceClient('https://setting.bysharing.org/command/degree', null)
const metadata: Metadata = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA5MSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwOTEifQ.xTJ8BTeGM_5uec9zAt4Ea6t1ws_9YBG4XjjwyrAbOWs`
}

export const commandService = {
    create: async (value: string) => {
        const request = new AddDegreeCatalogRequest()
        const degname = new StringValue().setValue(value)
        request.setDegname(degname)
        const response = await client.addDegreeCatalog(request, metadata)
        return response
    },
    updateId: async ({ Id, DegName }: DegreesType) => {
        const request = new UpdateDegreeCatalogRequest()
        const id = new Int64Value().setValue(Id).setValue(Id)
        const name = new StringValue().setValue(DegName)
        request.setId(id)
        request.setDegname(name)
        const response = await client.updateDegreeCatalog(request, metadata)
        return response
    },
    deleteById: async (degId: number) => {
        const request = new DeleteDegreeCatalogRequest()
        const id = new Int64Value().setValue(degId)
        request.setId(id)
        const response = await client.deleteDegreeCatalog(request, metadata)
        return response
    }
}
