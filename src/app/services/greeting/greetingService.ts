import {
    CreateGreetingRequest,
    DeleteGreetingReply,
    DeleteGreetingRequest,
    GetGreetingByIdRequest,
    GreetingReply,
    ReadGreetingsRequest,
    UpdateGreetingRequest
} from './protos/greeting_pb'
import { GreeterClient } from './protos/GreetingServiceClientPb'

const client = new GreeterClient('http://localhost:8000')

export const greetingService = {
    getAll: async (): Promise<GreetingReply[]> => {
        const request = new ReadGreetingsRequest()

        const response = await client.readGreetings(request, {})

        return response.getGreetingsList()
    },

    getById: async (id: string): Promise<GreetingReply> => {
        const request = new GetGreetingByIdRequest()
        request.setId(id)
        const response = await client.getGreetingById(request, {})

        return response
    },

    create: async (body: { name: string }): Promise<GreetingReply> => {
        const request = new CreateGreetingRequest()
        request.setName(body.name)
        const response = await client.createGreeting(request, {})

        return response
    },

    delete: async (id: string): Promise<DeleteGreetingReply> => {
        const request = new DeleteGreetingRequest()
        request.setId(id)
        const response = await client.deleteGreeting(request, {})

        return response
    },

    update: async (id: string, body: { name: string }): Promise<GreetingReply> => {
        const request = new UpdateGreetingRequest()
        request.setId(id)
        request.setName(body.name)
        const response = await client.updateGreeting(request, {})

        return response
    }
}
