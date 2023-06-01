import { CallContext } from "nice-grpc";
import { ChatServiceImplementation, ChatRequest, ChatResponse, DeepPartial } from '../proto/compiled_proto/chat'
import {delay} from 'abort-controller-x';

//define service implementation
export const ChatServiceImpl: ChatServiceImplementation = {
    //unary
    async sendChat(request: ChatRequest): Promise<DeepPartial<ChatResponse>> {
        const response = {name: 'miri', message: 'hello world'}
        return response;
    },

    //client side streaming - receives request as an "async iterable"
    async sendMultipleChat(request: AsyncIterable<ChatRequest>): Promise<DeepPartial<ChatResponse>> {
        for await (const item of request) {
            console.log(item)
        }
        const response = {name: 'kenny', message: 'meow'}
        return response;
    },

    //server side streaming - should return asyncIterable
    async *receiveMultipleChat(request:ChatRequest, context: CallContext): AsyncIterable<DeepPartial<ChatResponse>> {

        /* 
        make response iterable 
        *Symbol.iterator is a 0 arg function that returns an iterable object 
        *see client side streaming ⬆️ - for of is used to iterate these asynciterables (currently not async as response is hard coded)
        */
        const response = {};
        response[Symbol.iterator] = function*() {
            yield {name: 'johnny', message: 'wheee'};
            yield {name: 'patryk', message: 'grpseeeek'};
            yield {name: 'ariel', message: 'techstack!'};
        }
        /*
        console.log(response) -> Object {}
        but!
        for(const items of response) {
            console.log(items)
        } will return:
        {name: 'johnny', message: 'wheee'}
        {name: 'patryk', message: 'grpseeeek'}
        {name: 'ariel', message: 'techstack!'}
        */
        for(let i = 0; i < 10; i++) {
            await delay(context.signal, 1000);
            yield response;
        }
    }
}